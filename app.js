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
    title: 'Junior Frontend Developer',
    coverPhoto: 'photosnap.svg',
    published: '1d ago',
    shift: 'Full Time',
    place: 'USA only',
    tags: ['Frontend', 'HTML', 'CSS', 'JavaScript', 'Senior'],
    featured: true,
    new: true,
    companyName: 'Photosnap'
  },
  {
    title: 'Full Stack Developer',
    coverPhoto: 'manage.svg',
    published: '1d ago',
    shift: 'Full Time',
    place: 'USA only',
    tags: ['Fullstack', 'HTML', 'Python', 'React'],
    featured: true,
    new: true,
    companyName: 'Manage'
  },
  {
    title: 'Junior Frontend Developer',
    coverPhoto: 'myhome.svg',
    published: '1d ago',
    shift: 'Full Time',
    place: 'USA only',
    tags: ['Frontend', 'HTML', 'Python', 'JavaScript', 'Senior'],
    featured: false,
    new: false,
    companyName: 'MyHome'
  },
  {
    title: 'Shortly Frontend Developer',
    coverPhoto: 'shortly.svg',
    published: '1d ago',
    shift: 'Full Time',
    place: 'USA only',
    tags: ['Frontend', 'HTML', 'Python', 'JavaScript', 'Senior'],
    featured: false,
    new: false,
    companyName: 'Shortly'
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
          <span class="job-card__tag">Frontend</span>
          <span class="job-card__tag">HTML</span>
          <span class="job-card__tag">CSS</span>
          <span class="job-card__tag">JavaScript</span>
          <span class="job-card__tag">Senior</span>
        </div>
      </div> `

        jobsCardContainer.insertAdjacentHTML('beforeend', cardsOfJob)
})