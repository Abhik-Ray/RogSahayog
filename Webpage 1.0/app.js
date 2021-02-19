const symptoms = {
  'covid': [
    "fever","dry cough","sore throat","conjunctivitis","diarrhoea","difficulty in breathing ","chest pain",
  ],
  'malaria': [
    "fever","headache","muscle aches","Nausea","diarrhoea","shaking chills",
  ],
  'dengue': [
    "fever","Nausea","eye pain","joint or bone pain","Swollen glands"," Rash",
  ],
  'swineflu': [
    "fever","Chills","Cough","Sore throat","Watery red eyes","Nausea and vomiting","Fatigue",
  ],
  'hiv': [
    "fever","night sweats","tiredness","lymph glands","Diarrhea","Sores on mouth, anus, or genitals","Pneumonia",
  ]
};

function createSymptomCheckbox(diseaseName) {
  let t = '';

  for (let i = 0; i < symptoms[diseaseName].length; i++) {
    t = t + `<input type="checkbox" id="symptom${i}" name="symptom${i}" value="${symptoms[diseaseName][i]}"><label style="font-size: 1rem, text-aling: center" for="symptom${i}"> I have ${symptoms[diseaseName][i]}</label><br></br>`;
  }

  t+=`<button class="banner-btn" id="disease-btn">Submit</button>`;
  return t
}

$('#disease-btn').on('click', () => {
  const diseaseName = $('.disease-select').val()
  $('.input-container').html(
    createSymptomCheckbox(diseaseName)
  );
})