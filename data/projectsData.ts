interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'WCAG Color Guideliness',
    description: `The Color Contrast Checker is a tool built to ensure web accessibility by evaluating the contrast between two colors. It calculates the contrast ratio, checks compliance with WCAG standards for text and UI elements, and offers a "Fix Contrast" option to suggest accessible alternatives, making inclusive design straightforward.`,
    imgSrc: '/static/images/wcag169.jpg',
    href: 'https://codepen.io/andy0911/full/PoMvwyb',
  },
  {
    title: 'Comparative Study of Machine Learning Models on Devanāgari Scripts',
    description: `A Comparative Study of ML Models analyzing Support Vector Machines (SVM) and Convolutional Neural Networks (CNN) for Devanagari script recognition, focusing on accuracy, training time, and performance. The project highlights CNN's superior accuracy (98.66%) and faster training, with plans to expand the dataset and explore advanced deep learning techniques.`,
    imgSrc: '/static/images/mlmodels169.jpg',
    href: 'https://colab.research.google.com/drive/1JikKcbT9AuZDqJfETIJLLgdJ6XyZYpE9?usp=sharing',
  },
]

export default projectsData
