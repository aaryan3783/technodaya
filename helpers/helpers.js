import { storage } from "@/firebasse.config"
import { deleteObject, ref } from "firebase/storage"

const Categories = [
  '' ,
  'Announcement',
 'Awards',
 'Book Chapters',
 'Books',
 'Conference Papers',
 'Consultancy Projects',
 'External Funded Projects',
 'Faculty Empowerment Programmes',
 'Invited/Expert Lectures given by NIT AP members',
 'Memorandum of Understanding (MoU)',
 'Outreach Activity',
 'Patent (APA 7th edition format)',
 'Research Papers',
 'Reviewers',
 'Session Chairs',
 'Visits and Invited/Expert Lectures to NITAP from other insitutes',
 'Winners of Competition',
 'Workshop / FDP / Conference / seminar / short term course etc.'
  // 'Other'
]

const CategoryTitles = [
  '',
  'Announcement',
  'Awards',
  'Book Chapters',
  'Books',
  'Conference Papers',
  'Consultancy Projects',
  'External Funded Projects',
  'Faculty Empowerment Programmes',
  'Invited/Expert Lectures given by NIT AP members',
  'Memorandum of Understanding (MoU)',
  'Outreach Activity',
  'Patent (APA 7th edition format)',
  'Research Papers',
  'Reviewers',
  'Session Chairs',
  'Visits and Invited/Expert Lectures to NITAP from other insitutes',
  'Winners of Competition',
  'Workshop / FDP / Conference / seminar / short term course etc.'
  // ''
]

const Sections = {
  'default': { id: 'default', title: 'All Activities', taskIds: [], categories: [] },
  's0': { id: 's0', title: 'Acadmic Activities', taskIds: [], categories: [] },
  's1': { id: 's1', title: 'Research & Development', taskIds: [], categories: [] },
  's2': { id: 's2', title: 'Faculty Empowerment Programs', taskIds: [], categories: [] },
  's3': { id: 's3', title: 'Awards', taskIds: [], categories: [] },
  's4': { id: 's4', title: 'Outreach Activities', taskIds: [], categories: [] },
  's5': { id: 's5', title: 'Alumni Association', taskIds: [], categories: [] },
  's6': { id: 's6', title: 'Upcoming Events', taskIds: [], categories: [] },
}

const BiMonthlyNames = [
  ['', '', ''],
  ['JanFeb', 'January - February', 'Jan - Feb'],
  ['MarApril', 'March - April', 'Mar - Apr'],
  ['MayJune', 'May - June', 'May - Jun'],
  ['JulyAug', 'July - August', 'Jul - Aug'],
  ['SeptOct', 'September - October', 'sep - Oct'],
  ['NovDec', 'November - December', 'Nov - Dec'],
]

const getBiMonth = (date) => {
  const biMonth = Math.floor((+date.slice(5, date.length) + 1) / 2)
  return biMonth
}


const toCapital = (s) => {
  const len = s.length
  return s.slice(0, 1).toUpperCase() + s.slice(1, len).toLowerCase()
}

const deleteFileFromStorage = async (url) => {
  const fileRef = ref(storage, url);
  try {
    await deleteObject(fileRef);
    console.log('Deleted file');
  } catch (err) {
    console.log(err);
  }
}


export { Categories, CategoryTitles, Sections, toCapital, BiMonthlyNames, getBiMonth, deleteFileFromStorage } 