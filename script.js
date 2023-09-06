document.addEventListener('DOMContentLoaded', function() {
  const generateButton = document.getElementById('generatePrompt');
  const promptOutput = document.getElementById('promptOutput');
  
  generateButton.addEventListener('click', function() {
    const baseIdea = document.getElementById('baseIdea').value;
    
    const generatedPrompt = generatePrompt(baseIdea);
    promptOutput.innerHTML = `<p>${generatedPrompt}</p>`;
  });
  
  function generatePrompt(baseIdea) {
    // Generate prompt based on the provided base idea
    let prompt = `Your AI prompt based on the idea "${baseIdea}" could be: `;
    prompt += `"Write a creative blog post discussing ${baseIdea} and its impact on society."`;
    
    return prompt;
  }
});
