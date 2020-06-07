export interface colliderInt {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }
  interface mapInt{
    id : number;
    startX : number;
    startY : number;
    size : string;
    path :string;
    next : [number,number,number,number];
    //prev : [number,number,number];
  }

export let COLLIDERS1: colliderInt[] = [
      
    ];
export let COLLIDERS2: colliderInt[] = [
      
  ];
export let MAPS: mapInt[] = [
  {id:0,startX: 158,startY:250,size: "30%",path:"1.png",next:[430,500,110,186]},
  {id:1,startX: 278,startY:138,size: "100%",path:"2.png",next:[0,190,1130,1162]},
  {id:2,startX: 472,startY:250,size: "40%",path:"3.png",next:[0,0,0,0]}
]