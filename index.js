const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const capitaliseWord = (word) => {
    return word[0].toUpperCase() + word.slice(1)
  }

  const capitaliseSentence = (sentence) => {
    const words = sentence.split(" ")
    const capWords = []
    for (let word of words) {
      capWords.push(capitaliseWord(word))
    }
    return capWords.join(" ")
  }

  return tutorials.map( sentence => capitaliseSentence(sentence) )
}

// refactored to take capitaliseSentence out of separate function and put as block within map:

const titleCased = () => {
  const capitaliseWord = (word) => {
    return word[0].toUpperCase() + word.slice(1)
  }

  return tutorials.map(sentence => {
    const words = sentence.split(" ")
    const capWords = []
    for (let word of words) {
      capWords.push(capitaliseWord(word))
    }
    return capWords.join(" ")
  })
}

