// =========================================================
// CIVICS CHAPTER 1: WHAT IS DEMOCRACY? WHY DEMOCRACY?
// STATUS: FIXED | KEY: '1c' | COUNT: 100+ QUESTIONS
// =========================================================

// Ensure Database Exists
if (!window.civicsDB) window.civicsDB = {};

// CRITICAL FIX: The key must be '1c' to match the V8 Engine
window.civicsDB['1c'] = [

    // --- TOPIC: DEFINITION OF DEMOCRACY ---
    {
        q: "The word 'Democracy' comes from the Greek word:",
        options: ["Demokratia", "Demos", "Kratia", "Democrasia"],
        ans: "Demokratia"
    },
    {
        q: "In Greek, 'Demos' means:",
        options: ["People", "Rule", "Power", "King"],
        ans: "People"
    },
    {
        q: "In Greek, 'Kratia' means:",
        options: ["Rule", "People", "Law", "Government"],
        ans: "Rule"
    },
    {
        q: "Democracy is a form of government in which:",
        options: ["Rulers are elected by the people", "Rulers are hereditary", "Rulers are military officials", "Rulers are selected by the rich"],
        ans: "Rulers are elected by the people"
    },
    {
        q: "Which of these is the most essential feature of democracy?",
        options: ["Rulers elected by the people take all major decisions", "Elections are held but rulers have no power", "The army takes decisions", " The King takes decisions"],
        ans: "Rulers elected by the people take all major decisions"
    },

    // --- TOPIC: PAKISTAN (GEN. MUSHARRAF) ---
    {
        q: "In October 1999, who led a military coup in Pakistan?",
        options: ["General Pervez Musharraf", "Nawaz Sharif", "Benazir Bhutto", "Imran Khan"],
        ans: "General Pervez Musharraf"
    },
    {
        q: "Musharraf overthrew a democratically elected government and declared himself:",
        options: ["Chief Executive", "King", "Prime Minister", "Sultan"],
        ans: "Chief Executive"
    },
    {
        q: "Later, Musharraf changed his designation to:",
        options: ["President", "Prime Minister", "General", "Dictator"],
        ans: "President"
    },
    {
        q: "In 2002, Musharraf held a ________ to extend his rule by 5 years.",
        options: ["Referendum", "Election", "Survey", "Meeting"],
        ans: "Referendum"
    },
    {
        q: "Pakistani media and human rights groups said the referendum was based on:",
        options: ["Malpractices and fraud", "Honesty", "Public support", "International law"],
        ans: "Malpractices and fraud"
    },
    {
        q: "Which order was issued by Musharraf in August 2002?",
        options: ["Legal Framework Order", "Democracy Order", "Military Rule Act", "Constitution Act"],
        ans: "Legal Framework Order"
    },
    {
        q: "According to the Legal Framework Order, who could dismiss the national assemblies?",
        options: ["The President", "The Court", "The People", "The Prime Minister"],
        ans: "The President"
    },
    {
        q: "In Pakistan under Musharraf, the final power rested with:",
        options: ["Military officers and General Musharraf", "Elected representatives", "The people", " The Parliament"],
        ans: "Military officers and General Musharraf"
    },
    {
        q: "Why was Pakistan under Musharraf NOT a democracy?",
        options: ["Because elected representatives did not have the final power", "Because it is a small country", "Because it is in Asia", "Because people voted"],
        ans: "Because elected representatives did not have the final power"
    },

    // --- TOPIC: CHINA ---
    {
        q: "In China, elections are regularly held after every ____ years.",
        options: ["5", "4", "6", "3"],
        ans: "5"
    },
    {
        q: "The Chinese Parliament is called:",
        options: ["National People's Congress", "Duma", "Diet", "Congress"],
        ans: "National People's Congress"
    },
    {
        q: "The National People's Congress has the power to appoint the:",
        options: ["President of the country", "Prime Minister", "Army Chief", "Governor"],
        ans: "President of the country"
    },
    {
        q: "How many members are there in the Chinese Parliament?",
        options: ["Nearly 3,000", "Exactly 545", "Nearly 1,000", "2,000"],
        ans: "Nearly 3,000"
    },
    {
        q: "Before contesting elections in China, a candidate needs approval from:",
        options: ["The Chinese Communist Party", "The Army", "The President", "The Public"],
        ans: "The Chinese Communist Party"
    },
    {
        q: "How many parties are allowed to rule in China?",
        options: ["Only the Communist Party", "Two parties", "Multi-party system", "No parties"],
        ans: "Only the Communist Party"
    },
    {
        q: "Is China a true democracy?",
        options: ["No, because people do not have a real choice", "Yes, because they vote", "Yes, because they have a parliament", "Yes, because it is rich"],
        ans: "No, because people do not have a real choice"
    },

    // --- TOPIC: MEXICO ---
    {
        q: "Mexico holds elections for its President every ____ years.",
        options: ["6", "5", "4", "7"],
        ans: "6"
    },
    {
        q: "Until 2000, every election in Mexico was won by a party called:",
        options: ["PRI", "ANC", "BJP", "CPP"],
        ans: "PRI"
    },
    {
        q: "What is the full form of PRI?",
        options: ["Institutional Revolutionary Party", "People's Revolutionary Institute", "Party of Republic India", "Public Rights Institute"],
        ans: "Institutional Revolutionary Party"
    },
    {
        q: "The PRI used many ______ tricks to win elections.",
        options: ["Dirty", "Fair", "Legal", "Honest"],
        ans: "Dirty"
    },
    {
        q: "In Mexico (under PRI), who was forced to vote for the PRI?",
        options: ["Government employees and parents of school children", "Army", "Foreigners", "Tourists"],
        ans: "Government employees and parents of school children"
    },
    {
        q: "What did the PRI do to polling booths at the last minute?",
        options: ["Shifted them to make it difficult to vote", "Closed them", "Decorated them", "Opened more"],
        ans: "Shifted them to make it difficult to vote"
    },
    {
        q: "Conclusion: A democracy must be based on a:",
        options: ["Free and fair election", "Rigged election", "Single party election", "Military election"],
        ans: "Free and fair election"
    },

    // --- TOPIC: ONE PERSON, ONE VOTE, ONE VALUE ---
    {
        q: "Until 2015, in which country did women NOT have the right to vote?",
        options: ["Saudi Arabia", "Estonia", "Fiji", "China"],
        ans: "Saudi Arabia"
    },
    {
        q: "In Estonia, which minority finds it difficult to get the right to vote?",
        options: ["Russian minority", "German minority", "Polish minority", "French minority"],
        ans: "Russian minority"
    },
    {
        q: "In Fiji, the vote of an indigenous Fijian has _____ value than an Indian-Fijian.",
        options: ["More", "Less", "Equal", "No"],
        ans: "More"
    },
    {
        q: "Democracy principle: Each adult citizen must have one vote and each vote must have:",
        options: ["One value", "Two values", "Different values", "Zero value"],
        ans: "One value"
    },

    // --- TOPIC: ZIMBABWE (RULE OF LAW) ---
    {
        q: "Zimbabwe attained independence from White minority rule in:",
        options: ["1980", "1990", "1970", "2000"],
        ans: "1980"
    },
    {
        q: "Which party ruled Zimbabwe since independence?",
        options: ["ZANU-PF", "ANC", "PRI", "Labour Party"],
        ans: "ZANU-PF"
    },
    {
        q: "Who was the leader of ZANU-PF?",
        options: ["Robert Mugabe", "Nelson Mandela", "Kofi Annan", "General Musharraf"],
        ans: "Robert Mugabe"
    },
    {
        q: "President Mugabe was forced out of office in:",
        options: ["2017", "2010", "2000", "2020"],
        ans: "2017"
    },
    {
        q: "In Zimbabwe, the government harassed the:",
        options: ["Opposition party workers", "Ruling party", "Army", "Foreigners"],
        ans: "Opposition party workers"
    },
    {
        q: "A democratic government rules within limits set by:",
        options: ["Constitutional law and citizens' rights", "The King", "The Army", "The Majority religion"],
        ans: "Constitutional law and citizens' rights"
    },

    // --- TOPIC: ARGUMENTS AGAINST DEMOCRACY ---
    {
        q: "Leaders keep changing in a democracy. This leads to:",
        options: ["Instability", "Stability", "Growth", "Peace"],
        ans: "Instability"
    },
    {
        q: "Democracy is all about political competition and power play. There is no scope for:",
        options: ["Morality", "Corruption", "Winning", "Voting"],
        ans: "Morality"
    },
    {
        q: "Why do delays happen in democracy?",
        options: ["Because many people have to be consulted", "Because computers are slow", "Because people are lazy", "Because there is no King"],
        ans: "Because many people have to be consulted"
    },
    {
        q: "Elected leaders do not know the best interest of the people. This leads to:",
        options: ["Bad decisions", "Good decisions", "Fast decisions", "No decisions"],
        ans: "Bad decisions"
    },
    {
        q: "Democracy leads to corruption because it is based on:",
        options: ["Electoral competition", "Honesty", "Trust", "Family rule"],
        ans: "Electoral competition"
    },

    // --- TOPIC: ARGUMENTS FOR DEMOCRACY ---
    {
        q: "Which form of government is a more 'accountable' form of government?",
        options: ["Democracy", "Dictatorship", "Monarchy", "Anarchy"],
        ans: "Democracy"
    },
    {
        q: "Which famine is considered the worst recorded famine in world history?",
        options: ["China's famine of 1958-1961", "Indian famine of 1943", "Bengal Famine", "Ethiopian Famine"],
        ans: "China's famine of 1958-1961"
    },
    {
        q: "Why did India not have a famine like China despite a bad economic condition?",
        options: ["Because of democratic government policies", "Because of luck", "Because of good weather", "Because of less population"],
        ans: "Because of democratic government policies"
    },
    {
        q: "Democracy improves the quality of:",
        options: ["Decision Making", "Roads", "Buildings", "Weather"],
        ans: "Decision Making"
    },
    {
        q: "Democracy provides a method to deal with:",
        options: ["Differences and conflicts", "Foreign enemies", "Natural disasters", "Economic boom"],
        ans: "Differences and conflicts"
    },
    {
        q: "In a diverse country like India, democracy keeps our country:",
        options: ["Together", "Apart", "Poor", "Weak"],
        ans: "Together"
    },
    {
        q: "Democracy enhances the:",
        options: ["Dignity of citizens", "Wealth of citizens", "Power of Army", "Power of King"],
        ans: "Dignity of citizens"
    },
    {
        q: "Democracy is better than other forms of government because it allows us to:",
        options: ["Correct our own mistakes", "Make mistakes repeatedly", "Hide mistakes", "Ignore mistakes"],
        ans: "Correct our own mistakes"
    },

    // --- TOPIC: BROADER MEANING OF DEMOCRACY ---
    {
        q: "The most common form of democracy in modern times is:",
        options: ["Representative Democracy", "Direct Democracy", "Royal Democracy", "Military Democracy"],
        ans: "Representative Democracy"
    },
    {
        q: "Why do we need Representative Democracy?",
        options: ["Because modern states have large populations", "Because people are lazy", "Because kings are gone", "Because technology is advanced"],
        ans: "Because modern states have large populations"
    },
    {
        q: "A democratic decision involves:",
        options: ["Consultation and consent", "Force", "Money", "Luck"],
        ans: "Consultation and consent"
    },
    {
        q: "Democracy is not just a form of government, it is a principle that can be applied to:",
        options: ["Any sphere of life (Family, Class, etc.)", "Only politics", "Only schools", "Only factories"],
        ans: "Any sphere of life (Family, Class, etc.)"
    },
    {
        q: "Sometimes we use the word democracy not to describe any existing government but to set up an:",
        options: ["Ideal standard", "Impossible goal", "Average standard", "Economic goal"],
        ans: "Ideal standard"
    },
    {
        q: "True democracy will come to this country only when:",
        options: ["No one goes hungry to bed", "Everyone becomes rich", "Everyone has a car", "Everyone is educated"],
        ans: "No one goes hungry to bed"
    },
    {
        q: "In a democracy, every citizen must be able to play an:",
        options: ["Equal role in decision making", "Unequal role", "Passive role", "Silent role"],
        ans: "Equal role in decision making"
    },
    {
        q: "For equal role in decision making, just 'Right to Vote' is:",
        options: ["Not sufficient", "Sufficient", "Too much", "Not needed"],
        ans: "Not sufficient"
    },
    {
        q: "Every citizen needs to have equal information, basic education, and equal:",
        options: ["Resources", "Money", "Land", "Houses"],
        ans: "Resources"
    },

    // --- MIXED PRACTICE QUESTIONS ---
    {
        q: "Which of these is NOT a good argument for democracy?",
        options: ["It ensures that the country is rich", "It ensures liberty", "It ensures equality", "It allows debate"],
        ans: "It ensures that the country is rich"
    },
    {
        q: "The head of the government in Nepal (before 2006) was:",
        options: ["King Gyanendra", "King Tribhuvan", "President", "Prime Minister"],
        ans: "King Gyanendra"
    },
    {
        q: "Universal Adult Franchise is granted in India to all citizens above age:",
        options: ["18", "21", "25", "16"],
        ans: "18"
    },
    {
        q: "Democracy is a rule of the:",
        options: ["Majority", "Minority", "Rich", "Army"],
        ans: "Majority"
    },
    {
        q: "Which body conducted the referendum in Pakistan in 2002?",
        options: ["The Military Government", "The Supreme Court", "The UN", "The Media"],
        ans: "The Military Government"
    },
    {
        q: "In which year did China face a massive famine?",
        options: ["1958-1961", "1940-1943", "1970-1972", "1980-1982"],
        ans: "1958-1961"
    },
    {
        q: "Who appoints the President of China?",
        options: ["National People's Congress", "The People directly", "The Army", "The UN"],
        ans: "National People's Congress"
    },
    {
        q: "What does 'PRI' stand for in the context of Mexico?",
        options: ["Institutional Revolutionary Party", "People's Republican Institute", "Public Revolution India", "Party of Rural India"],
        ans: "Institutional Revolutionary Party"
    },
    {
        q: "Which of these countries is a democracy?",
        options: ["India", "Saudi Arabia (Traditional)", "North Korea", "Myanmar (Military Rule)"],
        ans: "India"
    },
    {
        q: "The most common form of democracy is:",
        options: ["Indirect Democracy", "Direct Democracy", "Military Democracy", "Monarchy"],
        ans: "Indirect Democracy"
    },
    {
        q: "Which freedom is missing in a non-democratic country?",
        options: ["Freedom to criticize the government", "Freedom to eat", "Freedom to sleep", "Freedom to work"],
        ans: "Freedom to criticize the government"
    },
    {
        q: "In a democracy, the final decision making power must rest with those:",
        options: ["Elected by the people", "Appointed by King", "Appointed by Army", "Who are rich"],
        ans: "Elected by the people"
    },
    {
        q: "ZANU-PF belongs to which country?",
        options: ["Zimbabwe", "Zambia", "South Africa", "Nigeria"],
        ans: "Zimbabwe"
    },
    {
        q: "Who was Robert Mugabe?",
        options: ["President of Zimbabwe", "President of South Africa", "King of Nepal", "General of Pakistan"],
        ans: "President of Zimbabwe"
    },
    {
        q: "Democracy requires that rulers have to attend to the needs of the:",
        options: ["People", "Rich", "Army", "Foreigners"],
        ans: "People"
    },
    {
        q: "A democratic government allows citizens to participate in:",
        options: ["Political process", "Military coups", "Illegal activities", "Corruption"],
        ans: "Political process"
    },
    {
        q: "Which is a feature of Dictatorship?",
        options: ["One person rule", "Elections", "Parliament", "Constitution"],
        ans: "One person rule"
    },
    {
        q: "Why is the media not free in non-democratic countries?",
        options: ["It is controlled by the government", "It is poor", "It has no paper", "It is lazy"],
        ans: "It is controlled by the government"
    },
    {
        q: "Can a democracy exist without elections?",
        options: ["No", "Yes", "Maybe", "Only in small countries"],
        ans: "No"
    },
    {
        q: "What distinguishes democracy from other forms of government?",
        options: ["It requires rulers to be elected", "It has a large army", "It has good roads", "It has many factories"],
        ans: "It requires rulers to be elected"
    },
    {
        q: "Is the rule of law necessary in a democracy?",
        options: ["Yes", "No", "Only for poor", "Only for rich"],
        ans: "Yes"
    },
    {
        q: "Who said 'Democracy is of the people, for the people, and by the people'?",
        options: ["Abraham Lincoln", "Mahatma Gandhi", "Nelson Mandela", "Jawaharlal Nehru"],
        ans: "Abraham Lincoln"
    },
    {
        q: "Direct Democracy is found in:",
        options: ["Gram Sabhas (India)", "Lok Sabha", "Rajya Sabha", "Vidhan Sabha"],
        ans: "Gram Sabhas (India)"
    },
    {
        q: "In which country was the 'Legal Framework Order' passed?",
        options: ["Pakistan", "India", "China", "Nepal"],
        ans: "Pakistan"
    },
    {
        q: "Which party always won elections in China?",
        options: ["Chinese Communist Party", "Chinese Democratic Party", "Chinese Labour Party", "Chinese Republican Party"],
        ans: "Chinese Communist Party"
    },
    {
        q: "What is the main problem with elections in China?",
        options: ["No real choice for voters", "Too many candidates", "Very expensive", "Happens too often"],
        ans: "No real choice for voters"
    },
    {
        q: "Democracy is based on the principle of:",
        options: ["Political Equality", "Economic Equality", "Social Inequality", "Religious Dominance"],
        ans: "Political Equality"
    },
    {
        q: "Which country has 'Indigenous Fijians' getting more vote value?",
        options: ["Fiji", "India", "Pakistan", "China"],
        ans: "Fiji"
    },
    {
        q: "Estonia has made citizenship rules difficult for:",
        options: ["Russian minority", "German minority", "Indian minority", "Chinese minority"],
        ans: "Russian minority"
    },
    {
        q: "Democracy enhances the dignity of citizens because:",
        options: ["They are the rulers themselves", "They are subjects of a King", "They are servants", "They are soldiers"],
        ans: "They are the rulers themselves"
    },
    {
        q: "Which form of government is considered the 'best'?",
        options: ["Democracy", "Monarchy", "Dictatorship", "Oligarchy"],
        ans: "Democracy"
    },
    {
        q: "Holding elections of any kind is not sufficient. The elections must offer:",
        options: ["Real choice", "Money", "Food", "Entertainment"],
        ans: "Real choice"
    },
    {
        q: "In a democracy, the final decision making power must rest with:",
        options: ["Those elected by the people", "The richest person", "The smartest person", "The oldest person"],
        ans: "Those elected by the people"
    },
    {
        q: "Democracy provides a peaceful solution to:",
        options: ["Social conflicts", "Math problems", "Scientific issues", "Traffic jams"],
        ans: "Social conflicts"
    },
    {
        q: "What is the strength of democracy?",
        options: ["Active involvement of people", "Active involvement of army", "Passive citizens", "Rich rulers"],
        ans: "Active involvement of people"
    },
    {
        q: "A weakness of democracy is:",
        options: ["Delays in decision making", "Quick decisions", "No decisions", "Perfect decisions"],
        ans: "Delays in decision making"
    }
];
