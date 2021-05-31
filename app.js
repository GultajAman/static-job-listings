const jobsCardContainer = document.querySelector('.container');

const jobsAnouncements = [
  {
    title: 'Senior Frontend Developer',
    coverPhoto: 'faceit.svg',
    published: '1d ago',
    shift: 'Full Time',
    place: 'USA only',
    tags: ['Frontend', 'HTML', 'CSS', 'JavaScript', 'Senior'],
    featured: true,
    new: true,
    companyName: 'FaceIt'
  },
  {
    title: 'Full Stack Developer',
    coverPhoto: 'photosnap.svg',
    published: '1d ago',
    shift: 'Part Time',
    place: 'Remote',
    tags: ['Midweight', 'Fullstack', 'Python', 'React'],
    featured: true,
    new: true,
    companyName: 'Photosnap'
  },
  {
    title: 'Junior Frontend Developer',
    coverPhoto: 'account.svg',
    published: '2d ago',
    shift: 'Part Time',
    place: 'USA only',
    tags: ['Frontend', 'Junior', 'JavaScript', 'React','Sass'],
    featured: false,
    new: true,
    companyName: 'Account'
  },
  {
    title: 'Junior Frontend Developer',
    coverPhoto: 'myhome.svg',
    published: '5d ago',
    shift: 'Contract',
    place: 'USA only',
    tags: ['Junior', 'CSS', 'JavaScript', 'JavaScript', 'Senior'],
    featured: false,
    new: false,
    companyName: 'MyHome'
  },
  {
    title: 'Software Engineer',
    coverPhoto: 'shortly.svg',
    published: '1w ago',
    shift: 'Full Time',
    place: 'Worldwide',
    tags: ['Fullstack', 'Midweight', 'JavaScript', 'Ruby', 'Sass'],
    featured: false,
    new: false,
    companyName: 'Loop Studios'
  },
  {
    title: 'Junior Backend Developer',
    coverPhoto: 'faceit.svg',
    published: '2w ago',
    shift: 'Full Time',
    place: 'UK only',
    tags: ['Backend', 'Junior', 'Ruby', 'RoR'],
    featured: false,
    new: false,
    companyName: 'FaceIt'
  },
  {
    title: 'Junior Developer',
    coverPhoto: 'shortly.svg',
    published: '2w ago',
    shift: 'Full Time',
    place: 'Worldwide',
    tags: ['Frontend', 'Junior', 'HTML', 'JavaScript', 'Sass'],
    featured: false,
    new: false,
    companyName: 'Shortly'
  },
  {
    title: 'Junior Frontend Developer',
    coverPhoto: 'insure.svg',
    published: '2w ago',
    shift: 'Full Time',
    place: 'USA only',
    tags: ['Frontend', 'Junior', 'HTML', 'JavaScript', 'Vue' ,'Sass'],
    featured: false,
    new: false,
    companyName: 'Insure'
  },
  {
    title: 'Full Stack Engineer',
    coverPhoto: 'eyecam-co.svg',
    published: '3w ago',
    shift: 'Full Time',
    place: 'Worldwide',
    tags: ['Fullstack', 'Midweight', 'JavaScript', 'Python', 'Django'],
    featured: false,
    new: false,
    companyName: 'Eyecam Co.'
  },
  {
    title: 'Front-end Dev',
    coverPhoto: 'the-air-filter-company.svg',
    published: '1mo ago',
    shift: 'Part Time',
    place: 'Worldwide',
    tags: ['Frontend', 'Junior', 'JavaScript', 'React', 'Sass'],
    featured: false,
    new: false,
    companyName: 'The Air Filter Company'
  }
];

jobsAnouncements.forEach(jobsAnouncement => {
  
  const cardsOfJob = `
  <div class="job-card">
  <div class="job-card__cover">
          <img src="./images/${jobsAnouncement.coverPhoto}" alt="" />
        </div>
        <div class="job-card__description">
          <div class="job-card__description-top">
            <span class="job-card__company-name">${jobsAnouncement.companyName}</span>
            <span class="job-card__badge job-card__badge--new">${jobsAnouncement.new}</span>
            <span class="job-card__badge job-card__badge--featured"
              >${jobsAnouncement.featured}</span>
          </div>
          <p class="job-card__title">${jobsAnouncement.title}</p>
          <div class="job-card__description-bottom">
            <span class="job-card__published">${jobsAnouncement.published}</span>
            <span class="job-card__shift">${jobsAnouncement.shift}</span>
            <span class="job-card__location">${jobsAnouncement.place}</span>
          </div>
        </div>
        <div class="job-card__tags">
          <span class="job-card__tag">${jobsAnouncement.tags}</span>
        </div>
      </div> `

        jobsCardContainer.insertAdjacentHTML('beforeend', cardsOfJob)
})