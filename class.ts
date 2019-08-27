class Shape {
  area: number;
  private color: string;
  
  constructor (public name: string, width:number, height: number){
    this.area = width * height;
    this.color = "pink";
  }
  
  shoutout(){
    return "I'm " + this.name + " with an area of " + this.area + "cm square";  
  }
  
};
