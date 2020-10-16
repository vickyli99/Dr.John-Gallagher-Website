var catAndActs = {};
catAndActs['Write'] = ['Technical', 'Texts', 'Within', 'Task', 'Tasks', 'Teachers', 'Students', 'Research', 'Student', 'Program', 'Programs', 'Processes', 'Process', 'Practices', 'Personal', 'Online', 'Language', 'L2'];
catAndActs['Transfer'] = ['Yearly_Students', 'Yearly_Writing', 'Yearly_Information', 'journal_writing', 'journal_students', 'journal_research', 'journal_knowledge', 'journal_learning', 'journal_can'];
catAndActs['Teach'] = ['Yearly_Training', 'Yearly_Within', 'Yearly_Writing', 'Yearly_Students', 'Yearly_Student', 'Yearly_Rhetorical', 'Yearly_Research', 'Yearly_Preservice', 'Yearly_Practices', 'Yearly_Presence', 'Yearly_New', 'Yearly_Must', 'Yearly_Literature', 'Yearly_Might', 'Yearly_Literacy', 'Yearly_Good', 'Yearly_Feedback', 'Yearly_Faculty', 'Yearly_English', 'Yearly_Educators'];
catAndActs['Student'] = ['Yearly_Writing', 'Yearly_White', 'Yearly_Whose', 'Yearly_Use', 'Yearly_Undergraduate', 'Yearly_Understand', 'Yearly_Teaching', 'Yearly_Prepare', 'Yearly_School', 'Yearly_phD', 'Yearly_Might', 'Yearly_May', 'Yearly_Learning', 'Yearly_Individual', 'Yearly_Helping', 'Yearly_Help', 'Yearly_Female', 'Yearly_Engage', 'Yearly_Doctoral', 'Yearly_Develop'];
catAndActs['Rhetoric'] = ['Other'];
catAndActs['Persuade'] = ['Conference'];

function ChangecatList() {
    var catList = document.getElementById("validationCustom03");
    var actList = document.getElementById("validationCustom04");
    var selCat = catList.options[catList.selectedIndex].value;
    while (actList.options.length) {
        actList.remove(0);
    }
    var cats = catAndActs[selCat];
    if (cats) {
        var i;
        for (i = 0; i < cats.length; i++) {
            var cat = new Option(cats[i], i);
            actList.options.add(cat);
        }
    }
} 