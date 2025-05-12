import * as THREE from 'three'

abstract class Entity {
    abstract create: () => THREE.Group;
};

export default Entity;