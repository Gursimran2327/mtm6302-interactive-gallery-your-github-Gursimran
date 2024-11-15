
const images = [
  { src: 'Images/first.jpg', title: 'HAPPY VIBES', description: 'HAPPY VIBES-A joyful scene filled with positive energy.' },
  { src: 'Images/second.jpg', title: 'Image 2', description: 'COZY MOMENTS–A warm, inviting atmosphere perfect for relaxation.' },
  { src: 'Images/third.jpg', title: 'Image 3', description: 'LOVELY VIEW–A breathtaking panorama showcasing nature’s beauty.' },
  { src: 'Images/4th.jpg', title: 'Image 4', description: 'PURE JOY–A joyful scene that captures happiness in its simplest form.' },
  { src: 'Images/5th.jpg', title: 'Image 5', description: 'Serene Glow-A peaceful glow that calms the mind and soul' },
  { src: 'Images/6th.jpg', title: 'Image 6', description: 'Delightful Glow-Soft, golden light that creates a comforting ambiance' },
  { src: 'Images/7th.jpg', title: 'Image 7', description: 'Charming Twilight-A breathtaking panorama showcasing nature’s beauty' },
  { src: 'Images/8.jpg', title: 'Image 8', description: 'Quiet Beauty-A joyful scene that captures happiness in its simplest form' },
  { src: 'Images/9.jpg', title: 'Image 9', description: 'Magic Dream-A warm, inviting atmosphere perfect for relaxation' },
  { src: 'Images/10.jpg', title: 'Image 10', description: 'Golden Hour-A peaceful glow that calms the mind and soul' },
  { src: 'Images/11.jpg', title: 'Image 11', description: 'Pure Joy-golden light that creates a comforting ambiance' },
  { src: 'Images/12.jpg', title: 'Image 12', description: 'Warm Embrace-A cozy, heartwarming image evoking feelings of comfort' },

]

const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('caption');
const closeBtn = document.getElementById('close');


images.forEach((image, index) => {
  const item = document.createElement('div');
  item.classList.add('gallery-item');
  item.dataset.index = index; 

  const img = document.createElement('img');
  img.src = image.src;  
  img.alt = image.title;

  item.appendChild(img);
  gallery.appendChild(item);
});


gallery.addEventListener('click', (event) => {
  const item = event.target.closest('.gallery-item');
  if (item) {
    const index = item.dataset.index;  
    const image = images[index];

    
    modalImg.src = image.src; 
    caption.textContent = image.description; 
    modal.classList.remove('hidden');  
  }
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.add('hidden');  
  }
});
