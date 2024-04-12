import SortView from '../view/sort-view.js';
import ListEventsView from '../view/list-events-view.js';
import PointView from '../view/point-view.js';
import AddNewDestinationPointView from '../view/add-new-destination-point-view.js';
import EventOneView from '../view/event-one-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  listEventsComponent = new ListEventsView();


  constructor({boardContainer, listEventsContainer}) {
    this.boardContainer = boardContainer;
    this.listEventsContainer = listEventsContainer;
  }


  init() {
    render(new SortView(), this.boardContainer);
    render(new ListEventsView(), this.boardContainer);  
  }

  init2() {
    render(new PointView(),  
    this.listEventsContainer);
    render(new AddNewDestinationPointView(), 
    this.listEventsContainer);
    
    for (let i = 0; i < 3; i++) {
      render(new EventOneView(), this.listEventsContainer)  
    } 
  }

}


