import { Selector } from 'testcafe'

class MyNotesPage {
    constructor(){
        this.pageTittle = Selector('.product_label')
        this.addNoteItemButton = Selector('btn.btn-primary')
        this.noteItem = Selector('.list-group-item')
    }
}

export default new MyNotesPage()