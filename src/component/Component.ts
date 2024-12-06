import * as THREE from 'three';

export interface ComponentArgs {
    mainColor: number;
    subColor?: number;
}

abstract class Component {
    protected abstract mainColor: number;
    protected subColor?: number;
    constructor() {}
}
export default Component;