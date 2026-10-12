/**
 * English to Hindi (Hinglish -> Devanagari) Transliteration Utility
 * Provides both instant local phonetic transliteration and Google Input Tools API enrichment
 */

// Common names, wedding terms, titles, and locations
export const COMMON_HINDI_WORDS = {
  // Titles & Honorifics
  'dr': 'डा.',
  'dr.': 'डा.',
  'doctor': 'डॉक्टर',
  'shri': 'श्री',
  'shree': 'श्री',
  'smt': 'श्रीमती',
  'er': 'इंजीनियर',
  'pt': 'पंडित',
  
  // Wedding & Occasions
  'weds': 'संग',
  'wed': 'संग',
  'sang': 'संग',
  'shubh': 'शुभ',
  'vivah': 'विवाह',
  'shadi': 'शादी',
  'shaadi': 'शादी',
  'nikah': 'निकाह',
  'walima': 'वलीमा',
  'mubarak': 'मुबारक',
  'barat': 'बारात',
  'baraat': 'बारात',
  'dulha': 'दूल्हा',
  'dulhan': 'दुल्हन',
  'mandap': 'मंडप',
  'palace': 'पैलेस',
  'hotel': 'होटल',
  'bhavan': 'भवन',
  'bhawan': 'भवन',
  'resort': 'रिसॉर्ट',
  'se': 'से',
  'tak': 'तक',
  'sthal': 'स्थल',
  'gram': 'ग्राम',
  'post': 'पोस्ट',
  'thana': 'थाना',
  'jila': 'जिला',
  'zila': 'जिला',
  'dist': 'जिला',
  'district': 'जिला',

  // Cities & Regions (Bihar / UP / India)
  'siwan': 'सिवान',
  'sewan': 'सिवान',
  'patna': 'पटना',
  'chapra': 'छपरा',
  'gopalganj': 'गोपालगंज',
  'muzaffarpur': 'मुजफ्फरपुर',
  'hajipur': 'हाजीपुर',
  'darbhanga': 'दरभंगा',
  'gorakhpur': 'गोरखपुर',
  'varanasi': 'वाराणसी',
  'banaras': 'बनारस',
  'lucknow': 'लखनऊ',
  'delhi': 'दिल्ली',
  'bihar': 'बिहार',
  'up': 'यूपी',
  'tarwaiya': 'तरवैया',
  'tarwaya': 'तरवैया',
  'bangra': 'बंगरा',
  'khalpura': 'खलपुरा',
  'sidhwal': 'सिधवल',
  'siddhwal': 'सिधवल',
  'kashipur': 'काशीपुर',
  'bairiya': 'बैरिया',

  // Common Groom & Boy Names
  'digvijay': 'दिग्विजय',
  'vikas': 'विकास',
  'vikash': 'विकाश',
  'rahul': 'राहुल',
  'rohit': 'रोहित',
  'amit': 'अमित',
  'amar': 'अमर',
  'aman': 'अमन',
  'anil': 'अनिल',
  'ajay': 'अजय',
  'alok': 'आलोक',
  'anand': 'आनंद',
  'ashish': 'आशीष',
  'ashok': 'अशोक',
  'abhishek': 'अभिषेक',
  'deepak': 'दीपक',
  'dinesh': 'दिनेश',
  'gaurav': 'गौरव',
  'harsh': 'हर्ष',
  'jitendra': 'जितेंद्र',
  'karan': 'करण',
  'krishna': 'कृष्णा',
  'kumar': 'कुमार',
  'manish': 'मनीष',
  'manoj': 'मनोज',
  'mayank': 'मयंक',
  'mohit': 'मोहित',
  'mukesh': 'मुकेश',
  'neeraj': 'नीरज',
  'nitin': 'नितिन',
  'pankaj': 'पंकज',
  'pradeep': 'प्रदीप',
  'prakash': 'प्रकाश',
  'prashant': 'प्रशांत',
  'praveen:': 'प्रवीण',
  'praveen': 'प्रवीण',
  'raj': 'राज',
  'raja': 'राजा',
  'rajesh': 'राजेश',
  'rajiv': 'राजीव',
  'rakesh': 'राकेश',
  'ram': 'राम',
  'ravi': 'रवि',
  'sachin': 'सचिन',
  'sandeep': 'संदीप',
  'sanjay': 'संजय',
  'sanjeev': 'संजीव',
  'santosh': 'संतोष',
  'sarvesh': 'सर्वेश',
  'satish': 'सतीश',
  'saurabh': 'सौरभ',
  'shivam': 'शिवम',
  'shyam': 'श्याम',
  'sunil': 'सुनील',
  'suresh': 'सुरेश',
  'tarun': 'तरुण',
  'umesh': 'उमेश',
  'varun': 'वरुण',
  'vijay': 'विजय',
  'vinod': 'विनोद',
  'vipul': 'विपुल',
  'vivek': 'विवेक',
  'mohan': 'मोहन',
  'singh': 'सिंह',
  'gupta': 'गुप्ता',
  'sharma': 'शर्मा',
  'yadav': 'यादव',
  'verma': 'वर्मा',
  'tiwari': 'तिवारी',
  'pandey': 'पांडेय',
  'mishra': 'मिश्रा',
  'patel': 'पटेल',
  'khan': 'खान',
  'ansari': 'अंसारी',
  'alam': 'आलम',

  // Common Bride & Girl Names
  'meenu': 'मीनू',
  'minu': 'मीनू',
  'babita': 'बबिता',
  'aarti': 'आरती',
  'anita': 'अनीता',
  'anjali': 'अंजलि',
  'ankita': 'अंकिता',
  'anushka': 'अनुष्का',
  'archana': 'अर्चना',
  'barkha': 'बरखा',
  'chhaya': 'छाया',
  'deepa': 'दीपा',
  'deepika': 'दीपिका',
  'divya': 'दिव्या',
  'geeta': 'गीता',
  'gita': 'गीता',
  'jyoti': 'ज्योति',
  'kajal': 'काजल',
  'kavita': 'कविता',
  'khushbu': 'खुशबू',
  'khushboo': 'खुशबू',
  'kiran': 'किरण',
  'komal': 'कोमल',
  'mamta': 'ममता',
  'manisha': 'मनीषा',
  'mona': 'मोना',
  'monika': 'मोनिका',
  'neha': 'नेहा',
  'nidhi': 'निधि',
  'nisha': 'निशा',
  'pooja': 'पूजा',
  'puja': 'पूजा',
  'poonam': 'पूनम',
  'pratibha': 'प्रतिभा',
  'preeti': 'प्रीति',
  'priti': 'प्रीति',
  'priya': 'प्रिया',
  'priyanka': 'प्रियंका',
  'radha': 'राधा',
  'ragini': 'रागिनी',
  'rakhi': 'राखी',
  'rani': 'रानी',
  'rekha': 'रेखा',
  'ritu': 'रितु',
  'roshni': 'रोशनी',
  'rupa': 'रूपा',
  'sakshi': 'साक्षी',
  'sangita': 'संगीता',
  'sangeeta': 'संगीता',
  'sapna': 'सपना',
  'sarita': 'सरिता',
  'seema': 'सीमा',
  'sima': 'सीमा',
  'shikha': 'शिखा',
  'shilpa': 'शिल्पा',
  'shivani': 'शिवानी',
  'shobha': 'शोभा',
  'shreya': 'श्रेया',
  'shweta': 'श्वेता',
  'simran': 'सिमरन',
  'sneha': 'स्नेहा',
  'sonam': 'सोनम',
  'sonia': 'सोनिया',
  'suman': 'सुमन',
  'sunita': 'सुनीता',
  'sushma': 'सुषमा',
  'swati': 'स्वाति',
  'tanu': 'तनु',
  'vandana': 'वंदना',
  'varsha': 'वर्षा'
};

// In-memory cache for transliterated words
const cache = new Map();

// Multi-character consonant patterns
const CONSONANTS = [
  ['ksh', 'क्ष'], ['gy', 'ज्ञ'], ['tr', 'त्र'], ['shr', 'श्र'],
  ['kh', 'ख'], ['gh', 'घ'], ['chh', 'छ'], ['ch', 'च'],
  ['jh', 'झ'], ['th', 'थ'], ['dh', 'ध'], ['ph', 'फ'],
  ['bh', 'भ'], ['shh', 'ष'], ['sh', 'श'],
  ['k', 'क'], ['g', 'ग'], ['j', 'ज'], ['t', 'त'], ['d', 'द'],
  ['n', 'न'], ['p', 'प'], ['f', 'फ'], ['b', 'ब'], ['m', 'म'],
  ['y', 'य'], ['r', 'र'], ['l', 'ल'], ['v', 'व'], ['w', 'व'],
  ['s', 'स'], ['h', 'ह']
];

// Vowel matras when following consonants
const MATRAS = [
  ['aa', 'ा'], ['ai', 'ै'], ['au', 'ौ'], ['ee', 'ी'], ['oo', 'ू'],
  ['a', ''], ['i', 'ि'], ['u', 'ु'], ['e', 'े'], ['o', 'ो']
];

// Standalone vowels at the beginning of words
const VOWELS_START = [
  ['aa', 'आ'], ['ai', 'ऐ'], ['au', 'औ'], ['ee', 'ई'], ['oo', 'ऊ'],
  ['a', 'अ'], ['i', 'इ'], ['u', 'उ'], ['e', 'ए'], ['o', 'ओ']
];

/**
 * Phonetic transliteration for words not in dictionary
 */
export function phoneticTransliterateWord(word) {
  if (!word) return '';
  const lower = word.toLowerCase();
  
  if (COMMON_HINDI_WORDS[lower]) {
    return COMMON_HINDI_WORDS[lower];
  }

  let result = '';
  let i = 0;
  const len = lower.length;

  while (i < len) {
    // Check if start of word or after vowel: standalone vowel
    if (i === 0 || result === '') {
      let matchedVowel = false;
      for (const [v, dev] of VOWELS_START) {
        if (lower.startsWith(v, i)) {
          result += dev;
          i += v.length;
          matchedVowel = true;
          break;
        }
      }
      if (matchedVowel) continue;
    }

    // Try to match a consonant
    let matchedConsonant = false;
    for (const [c, dev] of CONSONANTS) {
      if (lower.startsWith(c, i)) {
        i += c.length;
        matchedConsonant = true;

        // Lookahead for vowel/matra
        let matchedMatra = false;
        for (const [m, matraDev] of MATRAS) {
          if (lower.startsWith(m, i)) {
            result += dev + matraDev;
            i += m.length;
            matchedMatra = true;
            break;
          }
        }

        if (!matchedMatra) {
          // If followed by another consonant and not at end, maybe half consonant (virama)
          // But in common Hindi name pronunciation, ending consonant has inherent schwa:
          result += dev;
        }
        break;
      }
    }

    if (!matchedConsonant) {
      // Just push current char (punctuation, digit, etc.)
      result += lower[i];
      i++;
    }
  }

  return result || word;
}

/**
 * Fetch high-accuracy transliteration from Google Input Tools API
 * Falls back to dictionary and phonetic engine immediately if offline
 */
export async function fetchGoogleTransliterate(word) {
  if (!word || !/[a-zA-Z]/.test(word)) return word;
  const clean = word.toLowerCase().trim();

  // Check dictionary first
  if (COMMON_HINDI_WORDS[clean]) {
    return COMMON_HINDI_WORDS[clean];
  }

  // Check cache
  if (cache.has(clean)) {
    return cache.get(clean);
  }

  try {
    const url = `https://inputtools.google.com/request?text=${encodeURIComponent(clean)}&itc=hi-t-i0-und&num=1`;
    const res = await fetch(url);
    const data = await res.json();
    if (data && data[0] === 'SUCCESS' && data[1] && data[1][0] && data[1][0][1] && data[1][0][1][0]) {
      const result = data[1][0][1][0];
      cache.set(clean, result);
      return result;
    }
  } catch (err) {
    // API not reachable or offline - fallback to local phonetic
  }

  const localResult = phoneticTransliterateWord(clean);
  cache.set(clean, localResult);
  return localResult;
}

/**
 * Instant synchronous transliteration (for 0ms typing response)
 */
export function instantTransliterateWord(word) {
  if (!word || !/[a-zA-Z]/.test(word)) return word;
  const clean = word.toLowerCase().trim();
  if (COMMON_HINDI_WORDS[clean]) return COMMON_HINDI_WORDS[clean];
  if (cache.has(clean)) return cache.get(clean);
  return phoneticTransliterateWord(clean);
}

/**
 * Transliterates an entire string asynchronously (all English words -> Hindi)
 */
export async function transliterateFullText(text) {
  if (!text || !/[a-zA-Z]/.test(text)) return text;
  
  // Split while preserving spaces and punctuation
  const tokens = text.split(/(\s+|[.,/\\!@#$%^&*()_+=\-[\]{}|;:'"<>?])/);
  
  const converted = await Promise.all(
    tokens.map(async (token) => {
      if (!token.trim() || !/[a-zA-Z]/.test(token)) {
        return token;
      }
      return await fetchGoogleTransliterate(token);
    })
  );

  return converted.join('');
}
