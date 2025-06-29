// utils/analyzeResume.js
const JOB_KEYWORDS = [
  'python', 'java', 'javascript', 'sql', 'machine', 'learning', 'data',
  'web', 'cloud', 'aws', 'azure', 'docker', 'kubernetes', 'react', 'node',
  'communication', 'teamwork', 'problem', 'solving', 'leadership',
  'project', 'internship', 'research', 'development', 'software', 'engineering'
];

const stopwords = new Set([
  'the', 'is', 'in', 'at', 'which', 'on', 'for', 'and', 'a', 'an', 'to', 'of', 'with'
]);

const SECTION_HEADERS = {
  education: [/education/i, /academic/i],
  experience: [/experience/i, /work history/i, /employment/i],
  projects: [/projects/i, /project experience/i],
  skills: [/skills/i, /technical skills/i, /expertise/i],
  certifications: [/certifications/i, /certificates/i, /achievements/i]
};

const findSectionMatches = (text) => {
  const lines = text.toLowerCase().split('\n').map(l => l.trim());
  const found = [];
  for (const [section, patterns] of Object.entries(SECTION_HEADERS)) {
    for (const regex of patterns) {
      if (lines.some(line => regex.test(line))) {
        found.push(section);
        break;
      }
    }
  }
  return found;
};

const analyzeResume = (text) => {
  if (!text || text.length < 20) {
    return {
      score: 0,
      feedback: {},
      suggestions: ['Empty or invalid resume content.']
    };
  }

  let score = 0;
  const feedback = {};
  const suggestions = [];

  const tokens = text.toLowerCase().match(/\b\w+\b/g) || [];
  const filtered = tokens.filter((w) => !stopwords.has(w));

  const keywordCount = JOB_KEYWORDS.filter(k => filtered.includes(k)).length;
  const keywordScore = Math.min((keywordCount / JOB_KEYWORDS.length) * 40, 40);
  feedback['Keywords'] = `✅ ${keywordCount} relevant keywords found. (${keywordScore.toFixed(1)}/40)`;
  if (keywordCount < 5) suggestions.push('📌 Add more job-specific keywords like Python, SQL, or teamwork.');
  score += keywordScore;

  const wordCount = filtered.length;
  let lengthScore = 10;
  if (150 <= wordCount && wordCount <= 500) lengthScore = 15;
  else if (100 <= wordCount || wordCount > 600) lengthScore = 12;
  feedback['Length'] = `📊 Word count: ${wordCount}. (${lengthScore}/15)`;
  if (wordCount < 150) suggestions.push('📝 Resume is too short. Add more experience, projects, or skills.');
  if (wordCount > 600) suggestions.push('🧹 Resume is too long. Make it more concise.');
  score += lengthScore;

  const foundSections = findSectionMatches(text);
  const sectionScore = Math.min(foundSections.length * 3, 15);
  feedback['Sections'] = `📚 Detected: ${foundSections.join(', ') || 'None'}. (${sectionScore}/15)`;
  if (foundSections.length < 4) suggestions.push('📎 Add key sections like Education, Skills, Projects, and Experience.');
  score += sectionScore;

  let formattingScore = 15;
  const lines = text.split('\n');
  if (lines.length < 10) {
    formattingScore -= 5;
    suggestions.push('📐 Improve formatting with more structure and spacing.');
  }
  if (!/\b\d{4}\b/.test(text)) {
    formattingScore -= 5;
    suggestions.push('📅 Include years for experience or graduation.');
  }
  feedback['Formatting'] = `📏 Structure & Dates Check (${formattingScore}/15)`;
  score += formattingScore;

  let readabilityScore = 15;
  const longWords = filtered.filter(word => word.length > 15).length;
  if (longWords > 5) {
    readabilityScore -= 3;
    suggestions.push('🔤 Avoid overly complex words.');
  }
  const sentenceCount = (text.match(/\./g) || []).length;
  if (sentenceCount < 5) {
    readabilityScore -= 3;
    suggestions.push('🧾 Use more complete sentences or bullet points.');
  }
  feedback['Readability'] = `📖 Clarity & Simplicity (${readabilityScore}/15)`;
  score += readabilityScore;

  return {
    score: Math.round(score),
    feedback,
    suggestions
  };
};

export default analyzeResume;
