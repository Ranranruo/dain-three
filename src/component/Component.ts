import * as THREE from 'three';

export interface ComponentArgs {
    mainColor: number;
    subColor?: number;
}

abstract class Component {
    protected abstract mainColor: number;
    protected subColor?: number;
    constructor() {}

    protected setColors = ({mainColor, subColor}: {mainColor: number, subColor?: number}) => {
        this.mainColor = mainColor;
        if(subColor)
            this.subColor = subColor;
    }

    abstract create(): THREE.Object3D;

    abstract clear(): void;
}
export default Component;