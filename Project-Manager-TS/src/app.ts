// autobind deco
// function AutoBind(target:any,methodName:string,descriptor:PropertyDescriptor){
//   const orgMethod=descriptor.value;
//   const adjDescriptor:PropertyDescriptor={
//     configurable:true,
//     get(){
//       const boundFn=orgMethod.bind(this);
//       return boundFn;
//     }
//   }
//   return adjDescriptor;
// }
//state management
interface Drag{
  dragStartHandler(event:DragEvent):void
  dragEndHandler(event:DragEvent):void
}

interface DragTarget{
  dragOverHandler(event:DragEvent):void
  dropHandler(event:DragEvent):void
  dragLeaveHandler(event:DragEvent):void
}

enum STATUS{
  Active,Finished
}

class Project{
  constructor(
    public id:string,
    public title:string,
    public description:string,
    public people:number,
    public status:STATUS
  ){}
}

type Listener<T> =(items:T[])=>void;

class State<T>{
  protected listeners:Listener<T>[]=[];
  addListener(listener:Listener<T>){
    console.log(this.listeners);
    this.listeners.push(listener);
  }

}

class ProjectState extends State<Project>{
  private projects: Project[]=[];
  private static instance:ProjectState;
  
  private constructor(){
    super()
  }

  static getInstance(){
    if(this.instance){
      return this.instance
    }
    this.instance=new ProjectState();
    return this.instance;
  }

    addProject(title:string,description:string,people:number){
    const newProj=new Project(Math.random.toString(),title,description,people,STATUS.Active)
    this.projects.push(newProj);
    this.updateListener();
  }

  moveProject(projectId:string,newStatus:STATUS){
    const project=this.projects.find((prj) => prj.id === projectId);
    if(project){
      project.status=newStatus;
      this.updateListener();
    }
  }

  private updateListener(){
    for(const listenerFn of this.listeners){
      listenerFn(this.projects.slice())
    }
  }
}

const projectState=ProjectState.getInstance();


interface Validate{
  value:string |number;
  required?:Boolean,
  minLength?:number;
  maxLength?:number;
  min?:number;
  max?:number;
}

function validate(validateInput:Validate){
  let isValid=true;
  if(validateInput.required){
    isValid=isValid && validateInput.value.toString().trim().length!==0;
  }
  if(validateInput.minLength && typeof validateInput.value === 'string'){
    isValid = isValid && validateInput.value.length >= validateInput.minLength;
  }
  if(validateInput.maxLength && typeof validateInput.value === 'string'){
    isValid = isValid && validateInput.value.length <= validateInput.maxLength;
  }
  if(validateInput.min !=null && typeof validateInput.value === 'number'){
    isValid = isValid && validateInput.value <= validateInput.min;
  }
  
  if(validateInput.max !=null && typeof validateInput.value === 'number'){
    isValid = isValid && validateInput.value >= validateInput.max;
  }
  
  return isValid;
}

abstract class Component<T extends HTMLElement,U extends HTMLElement> {
  tempElement:HTMLTemplateElement;
  hostElement:T;
  element:U;

  constructor(templateId:string,hostElementId:string,insertAtStart:boolean,newElementId?:string){
    this.tempElement= document.getElementById(templateId)! as HTMLTemplateElement;
    this.hostElement= document.getElementById(hostElementId)! as T;
  
    const importedHtml=document.importNode(this.tempElement.content,true)
    this.element=importedHtml.firstElementChild as U;
    if(newElementId){
    this.element.id= `${newElementId}-projects`;
      
    }
    this.attach(insertAtStart);
  }

  private attach(insertAtBeg:boolean){
    this.hostElement.insertAdjacentElement(
      insertAtBeg ? 'afterbegin':'beforeend'
      ,this.element)
  }

  abstract configure():void;
  abstract renderContent():void;
}

class ProjectItem extends Component<HTMLUListElement,HTMLLIElement> implements Drag{
  private project:Project;
  constructor(hostId:string,project:Project){
    super('single-project',hostId,false,project.id)
    this.project=project;
    this.configure();
    this.renderContent();
  }
  dragStartHandler(event:DragEvent){
    event.dataTransfer!.setData('text/plain',this.project.id);
    event.dataTransfer!.effectAllowed='move';
  }

  dragEndHandler(_:DragEvent){
    
  }
  configure(){
    this.element.addEventListener('dragstart',this.dragStartHandler.bind(this))
    this.element.addEventListener('dragend',this.dragEndHandler.bind(this))

  }

  get persons(){
    if(this.project.people === 1){
      return '1 person';
    }else{
      return `${this.project.people} Persons assigned`
    }
  }

  renderContent(){
    this.element.querySelector('h2')!.textContent=this.project.title;
    this.element.querySelector('h3')!.textContent=this.persons;
    this.element.querySelector('p')!.textContent=this.project.description;


  }
}


//projectlist class
class ProjectList extends Component<HTMLDivElement,HTMLElement> implements DragTarget{
  
  assignedProjects:any[]
  constructor(private type:'active' | 'finished'){
    super('project-list','app',false,`${type}-projects`);
    this.assignedProjects=[];
    
    this.configure();
    this.renderContent();
  }
  private renderProjects(){
    const listEl=document.getElementById(`${this.type}-projects-list`) as HTMLUListElement;
    listEl.innerText='';
    for(const proj of this.assignedProjects){
      new ProjectItem(this.element.querySelector('ul')!.id,proj);
    }
  }
  
  dragOverHandler(event:DragEvent){
    if(event.dataTransfer && event.dataTransfer.types[0] === 'text/plain'){
      event.preventDefault();
    }
    //const listEl=this.element.querySelector('ul')!;
  }
  dropHandler(event:DragEvent){
    const id=event.dataTransfer!.getData('text/plain');
    projectState.moveProject(id,this.type === 'active' ? STATUS.Active : STATUS.Finished)
  }
  dragLeaveHandler(_:DragEvent){
    console.log();
  }

  configure(){ 
    this.element.addEventListener('dragover',this.dragOverHandler.bind(this))
    this.element.addEventListener('dragleave',this.dragLeaveHandler.bind(this))
    this.element.addEventListener('drop',this.dropHandler.bind(this))


    console.log(projectState.addListener)
    projectState.addListener((projects:Project[])=>{
      const relProj=projects.filter((prj) => {
        if(this.type === 'active'){
          return prj.status === STATUS.Active
        }
        return prj.status === STATUS.Finished;
      });
      this.assignedProjects=relProj;
      
      this.renderProjects()
    })
   }
  
  renderContent(){
    const listId=`${this.type}-projects-list`;
    this.element.querySelector('ul')!.id=listId;
    this.element.querySelector('h2')!.textContent=this.type.toUpperCase()+'PROJECTS';
  }
  
}


class ProjectInput extends Component<HTMLDivElement,HTMLFormElement>{
  titleInputElement:HTMLInputElement;
  desInputElement:HTMLInputElement;
  peopleInputElement:HTMLInputElement;

  constructor(){
    super('project-input','app',true,'user-input')
        this.titleInputElement=this.element.querySelector("#title")! as HTMLInputElement;
    this.desInputElement=this.element.querySelector("#description")! as HTMLInputElement;
    this.peopleInputElement=this.element.querySelector("#people")! as HTMLInputElement;



    this.configure();
    
  }


//get user value
  private gatherUserInput():[string,string,number]|undefined{
    const enteredTitle=this.titleInputElement.value;
    const desTitle=this.desInputElement.value;
    const enteredPeople=this.peopleInputElement.value;

      const title:Validate={
        value:enteredTitle,
        required:true
      }
      const desc:Validate={
        value:desTitle,
        required:true,
        minLength:5
      }
      const peop:Validate={
        value:enteredPeople,
        required:true,
        min:1
      }
    if(
      !validate(title) ||
      !validate(desc) ||
      !validate(peop)
    ){
      alert('Invalid input');
      return;
    }else{
      return [enteredTitle,desTitle,+enteredPeople];
    }

  }

  private clearInputs(){
    this.titleInputElement.value='';
    this.desInputElement.value='';
    this.peopleInputElement.value='';

  }

  private submitHandler(event :Event){
    event.preventDefault();
    const userInput =this.gatherUserInput();
    if(Array.isArray(userInput)){
      const [title,des,people]=userInput;
      console.log(1,title,2,des,3,people);
      projectState.addProject(title,des,people);
      this.clearInputs();
    }
  }

  renderContent(){}
   configure(){
    this.element.addEventListener('submit',this.submitHandler.bind(this));
  }
  
}

const proj= new ProjectInput();
const actProj=new ProjectList('active');
const finishedProj=new ProjectList('finished');
