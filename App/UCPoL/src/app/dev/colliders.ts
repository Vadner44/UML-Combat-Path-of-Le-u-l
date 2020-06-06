interface colliderInt {
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

  }

export let COLLIDERS1: colliderInt[] = [
      
    ];
export let COLLIDERS2: colliderInt[] = [
      
  ];
export let MAPS: mapInt[] = [
  {id:0,startX: 158,startY:250,size: "30%",path:"1.png"},
  {id:1,startX: 278,startY:138,size: "100%",path:"2.png"}
]