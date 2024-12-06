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
}
export default Component;