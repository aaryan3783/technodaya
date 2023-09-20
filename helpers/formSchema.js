const  schema = {
    '0': [],
    // Memorandum of Understanding (MoU)
    '1': [
        { type: 'sectionHeading', label: 'Institute Section' },
        { type: 'text', label: 'Institute name', name: 'insName', required: true, placeholder: 'Institute name' },
        { type: 'text', label: 'Partner institute name', name: 'partnerInsName', required: true, placeholder: 'Partner institute name' },
        { type: 'text', label: 'Partner institute address', name: 'partnerInsAddr', required: true, placeholder: 'Partner institute address' },
        { type: 'sectionHeading', label: 'MoU details' },
        { type: 'text', label: 'Theme', name: 'theme', required: true, placeholder: 'Theme' },
        { type: 'text', label: 'Purpose of Agreement', name: 'purposeAgreement', required: true, placeholder: 'Purpose of Agreement' },
        { type: 'sectionHeading', label: 'Members present with designation' },
        { type: 'text', label: 'Members from NITAP', name: 'insMembers', required: true, placeholder: 'Members from NITAP' },
        { type: 'text', label: 'Members from partner organization', name: 'outMembers', required: true, placeholder: 'Members from partner organization' },
        { type: 'text', label: 'Other renowned members', name: 'otherMembers', required: true, placeholder: 'Other renowned members' },
        { type: 'sectionHeading', label: 'Date' },
        { type: 'date', label: 'Date', name: 'date', placeholder: 'Date', required: true },
    ],
    // Invited/Expert Lectures given by NIT AP members
    '2': [
        { type: 'sectionHeading', label: 'Details of the speaker' },
        { type: 'text', label: 'Speaker name', name: 'speakerName', required: true, placeholder: 'Speaker name' },
        { type: 'text', label: 'Designation', name: 'designation', required: true, placeholder: 'Designation' },
        { type: 'text', label: 'Department', name: 'department', required: true, placeholder: 'Department' },
        { type: 'sectionHeading', label: 'Event Details' },
        { type: 'text', label: 'Event name', name: 'eventName', required: true, placeholder: 'Event name' },
        { type: 'text', label: 'Title of speech', name: 'title', required: true, placeholder: 'Title of speech' },
        { type: 'text', label: 'Keynote/special lecture/inagural addr etc', name: 'lectureType', required: true, placeholder: 'Keynote/special lecture/inagural addr etc' },
        { type: 'text', label: 'Organizer with address', name: 'organizer', required: true, placeholder: 'Organizer with address' },
        { type: 'sectionHeading', label: 'Date' },
        { type: 'date', label: 'Date', name: 'date', placeholder: 'Date', required: true },
    ],
    // Visits and Invited/Expert Lectures to NITAP from other insitutes
    '3': [
        { type: 'sectionHeading', label: 'Details of the speaker' },
        { type: 'text', label: 'Speaker name', name: 'speakerName', required: true, placeholder: 'Speaker name' },
        { type: 'text', label: 'Designation', name: 'designation', required: true, placeholder: 'Designation' },
        { type: 'text', label: 'Department', name: 'department', required: true, placeholder: 'Department' },
        { type: 'text', label: 'Institute name', name: 'insName', required: true, placeholder: 'Institute name' },
        { type: 'sectionHeading', label: 'Event Details' },
        { type: 'text', label: 'Title of speech', name: 'title', required: true, placeholder: 'Title of speech' },
        { type: 'text', label: 'Keynote/special lecture/inagural addr etc', name: 'lectureType', required: true, placeholder: 'Keynote/special lecture/inagural addr etc' },
        { type: 'text', label: 'Organizing member/section (NITAP)', name: 'organizer', required: true, placeholder: 'Organizing member/section (NITAP)' },
        { type: 'sectionHeading', label: 'Date' },
        { type: 'date', label: 'Date', name: 'date', placeholder: 'Date', required: true },
    ],
    // External Funded Projects
    '4': [
        { type: 'sectionHeading', label: 'Principal and Co-principal Investigators\' details' },
        { type: 'list', itemType: 'PI', name: 'pi', label: 'Principal Investigators', placeholder: 'Principal Investigators' },
        { type: 'list', itemType: 'CoPI', name: 'copi', label: 'Co-principal Investigators', placeholder: '' },
        { type: 'person', personType: 'investigator', itemType: 'pi' },
        { type: 'sectionHeading', label: 'Person details' },
        { type: 'text', label: 'Project title', name: 'title', required: true, placeholder: 'Project title' },
        { type: 'text', label: 'Funding Agency', name: 'fundAgency', required: true, placeholder: 'Funding Agency' },
        { type: 'sectionHeading', label: 'Date' },
        { type: 'date', label: 'Date', name: 'date', placeholder: 'Date', required: true },
    ],
    // Consultancy Projects
    '5': [
        { type: 'sectionHeading', label: 'Faculty member details' },
        { type: 'text', label: 'Faculty name', name: 'facultyName', required: true, placeholder: 'Faculty name' },
        { type: 'text', label: 'Designation', name: 'designation', required: true, placeholder: 'Designation' },
        { type: 'text', label: 'Department', name: 'department', required: true, placeholder: 'Department' },
        { type: 'sectionHeading', label: 'Project details' },
        { type: 'text', label: 'Nature/title of the work/job', name: 'title', required: true, placeholder: 'Nature/title of the work/job' },
        { type: 'text', label: 'Sponsored agency', name: 'fundAgency', required: true, placeholder: 'Sponsored agency' },
        { type: 'sectionHeading', label: 'Date' },
        { type: 'date', label: 'Date', name: 'date', placeholder: 'Date', required: true },
    ],
    // Patent
    '6': [
        { type: 'sectionHeading', label: 'Patent details' },
        { type: 'text', label: 'Name of inventor', name: 'invName', required: true, placeholder: 'Name of inventor' },
        { type: 'number', label: 'Year patent was issued', name: 'year', required: true, placeholder: 'Year patent was issued', attrs: { min: 1950 } },
        { type: 'text', label: 'Unique patent ID (patent no.)', name: 'patId', required: true, placeholder: 'Unique patent ID (patent no.)' },
        { type: 'text', label: 'Patent office name', name: 'patOffice', required: true, placeholder: 'Patent office name' },
    ],
    // Research Papers
    '7': [
        { type: 'sectionHeading', label: 'Research Papers' },
        {
            type: 'radio', label: 'Journal type', name: 'confType', required: true, radios: [
                { value: 'national', label: 'National' }, { value: 'international', label: 'International' },
            ]
        },
        { type: 'sectionHeading', label: 'Author details' },
        { type: 'list', itemType: 'author', name: 'author', label: 'Authors', placeholder: 'Author(s)' },
        { type: 'person', personType: 'author', itemType: 'author' },
        { type: 'sectionHeading', label: 'Research details' },
        { type: 'number', label: 'Publication year', name: 'year', required: true, placeholder: 'Publication year', attrs: { min: 1950 } },
        { type: 'text', label: 'Article Title', name: 'title', required: true, placeholder: 'Article Title' },
        { type: 'text', label: 'Journal Title', name: 'journalTitle', required: true, placeholder: 'Journal Title' },
        { type: 'number', label: 'Volume no.', name: 'volNo', required: false, placeholder: 'Volume no.', attrs: { min: 0 } },
        { type: 'number', label: 'Issue no.', name: 'issueNo', required: false, placeholder: 'Issue no.', attrs: { min: 0 } },
        { type: 'text', label: 'Page no.', name: 'pageNos', placeholder: 'Page no.' },
        { type: 'text', label: 'DOI (if available)', name: 'doiUrl', placeholder: 'DOI (if available)' },
    ],
    // Books
    '8': [
        { type: 'sectionHeading', label: 'Author details' },
        { type: 'list', itemType: 'author', name: 'author', label: 'Authors', placeholder: 'Author(s)' },
        { type: 'person', personType: 'author', itemType: 'author' },
        { type: 'sectionHeading', label: 'Book details' },
        { type: 'number', label: 'Publication year', name: 'year', required: true, placeholder: 'Publication year', attrs: { min: 1950 } },
        { type: 'text', label: 'Book title, subtitle', name: 'title', required: true, placeholder: 'Book title, subtitle' },
        { type: 'text', label: 'Publisher name', name: 'publisher', required: true, placeholder: 'Publisher name' },
        { type: 'text', label: 'DOI (if available)', name: 'doiUrl', placeholder: 'DOI (if available)' },
    ],
    // Conference Paper
    '9': [
        { type: 'sectionHeading', label: 'Author details' },
        { type: 'list', itemType: 'author', name: 'author', label: 'Authors', placeholder: 'Author(s)' },
        { type: 'person', personType: 'author' },
        { type: 'sectionHeading', label: 'Research details' },
        {
            type: 'radio', label: 'Conference type', name: 'confType', required: true, radios: [
                { value: 'national', label: 'National' }, { value: 'international', label: 'International' },
            ]
        },
        { type: 'text', label: 'Title of the paper', name: 'title', required: true, placeholder: 'Title of the paper' },
        { type: 'text', label: 'Conference name', name: 'eventName', required: true, placeholder: 'Conference name' },
        { type: 'text', label: 'Location of conference', name: 'place', required: true, placeholder: 'Location of conference' },
        { type: 'text', label: 'DOI (if available)', name: 'doiUrl', placeholder: 'DOI (if available)' },
        { type: 'sectionHeading', label: 'Date' },
        { type: 'dateRange', from: { type: 'date', label: 'Date', name: 'date', placeholder: '', required: true }, to: { type: 'date', label: 'Date', name: 'toDate', required: false } },
    ],
    // Book Chapters
    '10': [
        { type: 'sectionHeading', label: 'Author details' },
        { type: 'list', itemType: 'author', name: 'author', label: 'Authors', placeholder: 'Author(s)' },
        { type: 'person', personType: 'author' },
        { type: 'sectionHeading', label: 'Publication details' },
        { type: 'text', label: 'Chapter title', name: 'title', required: true, placeholder: 'Chapter title' },
        { type: 'text', label: 'Editors name', name: 'editors', required: true, placeholder: 'Editors Name' },
        { type: 'text', label: 'Title of Book', name: 'bookTitle', required: true, placeholder: 'Title of Book' },
        { type: 'number', label: 'Publication year', name: 'year', required: true, placeholder: 'Publication year', attrs: { min: 1950 } },
        { type: 'text', label: 'Page no.', name: 'pageNos', required: true, placeholder: 'Page no.' },
        { type: 'text', label: 'Publisher', name: 'publisher', required: true, placeholder: 'Publisher' },
        { type: 'text', label: 'DOI (if available)', name: 'doiUrl', placeholder: 'DOI (if available)' },
        { type: 'sectionHeading', label: 'Date' },
        { type: 'date', label: 'Date', name: 'date', placeholder: 'Date', required: true },
    ],
    // Faculty Empowerment Programmes
    '11': [
        { type: 'sectionHeading', label: 'Faculty details' },
        { type: 'text', label: 'Faculty name', name: 'facultyName', required: true, placeholder: 'Faculty name' },
        { type: 'text', label: 'Designation', name: 'designation', required: true, placeholder: 'Designation' },
        { type: 'text', label: 'Department', name: 'department', required: true, placeholder: 'Department' },
        { type: 'sectionHeading', label: 'Programme details' },
        { type: 'text', label: 'Type: workshop/conference/seminar/FDP/EDP', name: 'eventType', required: true, placeholder: 'Type: workshop/conference/seminar/FDP/EDP' },
        { type: 'text', label: 'Title of the programme', name: 'title', required: true, placeholder: 'Title of the programme' },
        { type: 'text', label: 'Organising institute name with address', name: 'organizer', required: true, placeholder: 'Organising institute name with address' },
        { type: 'sectionHeading', label: 'Date' },
        { type: 'dateRange', from: { type: 'date', label: 'Date', name: 'date', placeholder: 'Date', required: true }, to: { type: 'date', label: 'Date', name: 'toDate', required: false } },
    ],
    // Reviewers
    '12': [
        { type: 'sectionHeading', label: 'Faculty details' },
        { type: 'text', label: 'Faculty name', name: 'facultyName', required: true, placeholder: 'Faculty name' },
        { type: 'text', label: 'Designation', name: 'designation', required: true, placeholder: 'Designation' },
        { type: 'text', label: 'Department', name: 'department', required: true, placeholder: 'Department' },
        { type: 'sectionHeading', label: 'Journal details' },
        { type: 'text', label: 'Journal Name', name: 'journalTitle', required: true, placeholder: 'Journal Name' },
        { type: 'text', label: 'Publishing House', name: 'publisher', required: true, placeholder: 'Publishing House' },
        { type: 'sectionHeading', label: 'Date' },
        { type: 'date', label: 'Date', name: 'date', placeholder: 'Date', required: true },
    ],
    // Session Chairs
    '13': [
        { type: 'sectionHeading', label: 'Faculty details' },
        { type: 'text', label: 'Faculty name', name: 'facultyName', required: true, placeholder: 'Faculty name' },
        { type: 'text', label: 'Designation', name: 'designation', required: true, placeholder: 'Designation' },
        { type: 'text', label: 'Department', name: 'department', required: true, placeholder: 'Department' },
        { type: 'sectionHeading', label: 'Programme details' },
        { type: 'text', label: 'Name of workshop/seminar/short term course etc.', name: 'eventName', required: true, placeholder: 'Name of workshop/seminar/short term course etc.' },
        { type: 'text', label: 'Organising institute name with address', name: 'organizer', required: true, placeholder: 'Organising institute name with address' },
        { type: 'sectionHeading', label: 'Date' },
        { type: 'dateRange', from: { type: 'date', label: 'Date', name: 'date', placeholder: 'Date', required: true }, to: { type: 'date', label: 'Date', name: 'toDate', required: false } },
    ],
    // Winners of Competition
    '14': [
        { type: 'sectionHeading', label: 'Winner details' },
        { type: 'text', label: 'Name with roll no.', name: 'winner', required: true, placeholder: 'Name with roll no.' },
        { type: 'text', label: 'Institute name', name: 'insName', required: true, placeholder: 'Institute name' },
        { type: 'sectionHeading', label: 'Competition details' },
        { type: 'text', label: 'Name of the competition', name: 'eventName', required: true, placeholder: 'Name of the competition' },
        { type: 'text', label: 'Theme of the competition', name: 'theme', required: true, placeholder: 'Theme of the competition' },
        { type: 'text', label: 'Position: first/second/third etc.', name: 'rank', required: true, placeholder: 'Position: first/second/third etc.' },
        { type: 'sectionHeading', label: 'Organiser details' },
        { type: 'text', label: 'Organising section/institute name', name: 'organizer', required: true, placeholder: 'Organising section/institute name' },
        { type: 'text', label: 'Institute Name if any collaboration/association (optional)', name: 'collaboration', required: true, placeholder: 'Institute Name if any collaboration/association (optional)' },
        { type: 'sectionHeading', label: 'Date' },
        { type: 'date', label: 'Date', name: 'date', placeholder: 'Date', required: true },
    ],
    // Workshop / FDP / Conference / seminar / short term course etc.
    '15': [
        { type: 'sectionHeading', label: 'Coordinator details' },
        { type: 'text', label: 'Coordinator(s) Name with designation and department', name: 'coordinatorName', required: true, placeholder: 'Coordinator(s) Name with designation and department' },
        { type: 'text', label: 'If collaboration mention full address', name: 'collaboration', placeholder: 'If collaboration mention full address' },
        { type: 'sectionHeading', label: 'Event details' },
        { type: 'text', label: 'Event name', name: 'eventName', required: true, placeholder: 'Event name' },
        { type: 'text', label: 'Title (theme)', name: 'theme', required: true, placeholder: 'Title (theme)' },
        { type: 'text', label: 'Place Name', name: 'place', required: true, placeholder: 'Place Name' },
        { type: 'sectionHeading', label: 'Date' },
        { type: 'dateRange', from: { type: 'date', label: 'Date', name: 'date', placeholder: 'Date', required: true }, to: { type: 'date', label: 'Date', name: 'toDate', required: false } },
    ],
    // Outreach Activity
    '16': [
        { type: 'sectionHeading', label: 'Activity details' },
        { type: 'text', label: 'Name of the event', name: 'eventName', required: true, placeholder: 'Name of the event' },
        { type: 'text', label: 'Theme', name: 'theme', required: true, placeholder: 'Theme' },
        { type: 'sectionHeading', label: 'Organiser details' },
        { type: 'text', label: 'Organiser name', name: 'organizer', required: true, placeholder: 'Organiser name' },
        { type: 'text', label: 'Designation', name: 'designation', required: true, placeholder: 'Designation' },
        { type: 'text', label: 'If collaboration mention name and full address', name: 'collaboration', placeholder: 'If collaboration mention name and full address' },
        { type: 'sectionHeading', label: 'Date' },
        { type: 'dateRange', from: { type: 'date', label: 'Date', name: 'date', placeholder: 'Date', required: true }, to: { type: 'date', label: 'Date', name: 'toDate', required: false } },
    ],
    // Announcement
    '17': [
        { type: 'sectionHeading', label: 'Event details' },
        { type: 'text', label: 'Event name', name: 'eventName', required: true, placeholder: 'Event name' },
        { type: 'text', label: 'Theme', name: 'theme', required: true, placeholder: 'Theme' },
        { type: 'sectionHeading', label: 'Organiser details' },
        { type: 'text', label: 'Organiser name and designation', name: 'organizer', required: true, placeholder: 'Organiser name and designation' },
        { type: 'text', label: 'Department name', name: 'department', required: true, placeholder: 'Department name' },
        { type: 'text', label: 'If collaboration mention full address', name: 'collaboration', placeholder: 'If collaboration mention full address' },
        { type: 'sectionHeading', label: 'Further details' },
        { type: 'text', label: 'Event link', name: 'eventLink', required: false, placeholder: 'Event link' },
        { type: 'sectionHeading', label: 'Date' },
        { type: 'dateRange', from: { type: 'date', label: 'Date', name: 'date', placeholder: 'Date', required: true }, to: { type: 'date', label: 'Date', name: 'toDate', required: false } },
        { type: 'sectionHeading', label: 'Upload Brochure (pdf/jpg/png)' },
        { type: 'file', label: 'Upload Brochure', name: 'eventBrochure', required: true, placeholder: 'Upload Brochure', accept: 'application/pdf, image/png, image/webp, image/jpeg' },
    ],
    // Awards
    '18': [
        { type: 'sectionHeading', label: 'Faculty member details' },
        { type: 'text', label: 'Faculty name', name: 'facultyName', required: true, placeholder: 'Faculty name' },
        { type: 'text', label: 'Designation', name: 'designation', required: true, placeholder: 'Designation' },
        { type: 'text', label: 'Department', name: 'department', required: true, placeholder: 'Department' },
        { type: 'sectionHeading', label: 'Award details' },
        { type: 'text', label: 'Award name', name: 'title', required: true, placeholder: 'Award name' },
        { type: 'text', label: 'Award Issuing Organization', name: 'fundAgency', required: true, placeholder: 'Award Issuing Organization' },
        { type: 'sectionHeading', label: 'Date (Optional)' },
        { type: 'month', label: 'Date', name: 'date', placeholder: 'Date', required: false },
    ],
    // Others
    '19': [
        { type: 'sectionHeading', label: 'Note: Using this section for activities that fall under existing categories will lead to rejection of your submission' },
        { type: 'sectionHeading', label: 'Mention activity title' },
        { type: 'text', label: 'Activity title', name: 'activityTitle', required: true, placeholder: 'Activity title' },
        { type: 'sectionHeading', label: 'Activity description' },
        { type: 'textarea', label: 'Activity description', name: 'desc', required: true, placeholder: 'Paste activity description here (Use Markdown for formating)' },
    ]
};

export default schema;