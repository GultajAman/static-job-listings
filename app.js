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
    companyName: 'FaceIt',
    border: true,
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
    companyName: 'Photosnap',
    border: true,
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
    companyName: 'Account',
    border: true,
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
    companyName: 'MyHome',
    border: true,
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
    companyName: 'Loop Studios',
    border: true,
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
    companyName: 'FaceIt',
    border: true,
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
    companyName: 'Shortly',
    border: true,
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
    companyName: 'Insure',
    border: true,
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
    companyName: 'Eyecam Co.',
    border: true,
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
    companyName: 'The Air Filter Company',
    border: true,
  }
];

jobsAnouncements.forEach(jobsAnouncement => {
  //first div container for all
  const jobCard = document.createElement('div');
  jobCard.classList.add('job-card');

  // second div container inside the first one
  const jobCardCover = document.createElement('div');
  jobCardCover.classList.add('job-card__cover');
  const jobCardCoverImg = document.createElement('img');
  jobCardCoverImg.src =`./images/${jobsAnouncement.coverPhoto}`;
  jobCardCover.append(jobCardCoverImg)

  // third div container inside the first one
  const jobCardDescription = document.createElement('div');
  jobCardDescription.classList.add('job-card__description');
  

  // first div inside of third one
  const jobCardDescriptionTop = document.createElement('div');
  jobCardDescriptionTop.classList.add('job-card__description-top');
  // three span
  const jobCardCompanyName = document.createElement('span');
  jobCardCompanyName.classList.add('job-card__company-name');
  jobCardCompanyName.textContent = `${jobsAnouncement.companyName}`;
  const jobCardBadgeNew = document.createElement('span');
  jobCardBadgeNew.classList.add('job-card__badge' , 'job-card__badge--new');
  jobCardBadgeNew.textContent = `${jobsAnouncement.new ? 'new!' : ''}`
  const jobCardBadgeFeatured = document.createElement('span');
  jobCardBadgeFeatured.classList.add('job-card__badge', 'job-card__badge--featured');
  jobCardBadgeFeatured.textContent = `${jobsAnouncement.featured ? 'featured' : ''}`;

  jobCardDescriptionTop.append(jobCardCompanyName,jobCardBadgeNew,jobCardBadgeFeatured)
  // paragraph
  const jobCardTitle = document.createElement('p');
  jobCardTitle.classList.add('job-card__title');
  jobCardTitle.textContent = `${jobsAnouncement.title}`;

  // second div inside of third one
  const jobCardDescriptionBottom = document.createElement('div');
  jobCardDescriptionBottom.classList.add('job-card__description-bottom');
  
  // three span
  const jobCardPublished = document.createElement('span');
  jobCardPublished.classList.add('job-card__published');
  jobCardPublished.textContent = `${jobsAnouncement.published}`
  const jobCardShift = document.createElement('span');
  jobCardShift.classList.add('job-card__shift');
  jobCardShift.textContent = `${jobsAnouncement.shift}`;
  const jobCardLocation = document.createElement('span');
  jobCardLocation.classList.add('job-card__location');
  jobCardLocation.textContent = `${jobsAnouncement.place}`;
  jobCardDescriptionBottom.append(jobCardPublished,jobCardShift,jobCardLocation);

  jobCardDescription.append(jobCardDescriptionTop,jobCardTitle,jobCardDescriptionBottom);

  // fourth div container inside the first one
  const jobCardTags = document.createElement('div');
  jobCardTags.classList.add('job-card__tags');
  const jobCardTagsSpan = document.createElement('span');
  jobCardTagsSpan.classList.add('job-card__tag');
  jobCardTagsSpan.textContent = `${jobsAnouncement.tags}`;

  jobCard.append(jobCardCover,jobCardDescription,jobCardTags);
  console.log(jobCard);

  jobsCardContainer.append(jobCard);
  console.log(jobsCardContainer);
})

// jobsAnouncements.forEach(jobsAnouncement => {
//   let tagsHTML = '';

//   jobsAnouncement.tags.forEach(tag => {
//     tagsHTML = tagsHTML + `<span class="job-card__tag">${tag}</span>`
//   })
  
//   const cardsOfJob = `
//   <div class="job-card job-card--cyan">
//   <div class="job-card__cover">
//           <img src="./images/${jobsAnouncement.coverPhoto}" alt="" />
//         </div>
//         <div class="job-card__description">
//           <div class="job-card__description-top">
//             <span class="job-card__company-name">${jobsAnouncement.companyName}</span>
//             ${jobsAnouncement.new ? `<span class="job-card__badge job-card__badge--new">new!</span>` : ''}
//             ${jobsAnouncement.featured ? `<span class="job-card__badge job-card__badge--featured">featured</span>` : ''}
//           </div>
//           <p class="job-card__title">${jobsAnouncement.title}</p>
//           <div class="job-card__description-bottom">
//             <span class="job-card__published">${jobsAnouncement.published}</span>
//             <span class="job-card__shift">${jobsAnouncement.shift}</span>
//             <span class="job-card__location">${jobsAnouncement.place}</span>
//           </div>
//         </div>
//         <div class="job-card__tags">
//           ${tagsHTML}
//         </div>
//       </div> `

//         jobsCardContainer.insertAdjacentHTML('beforeend', cardsOfJob)
// })