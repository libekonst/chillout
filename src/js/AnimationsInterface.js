//@ts-check

/** Animation classes should inherit from this class and override its methods. Simulates an Interface. */
export default class AnimationsInterface {
    makeActive() {
        throw new Error('Method not implemented!');
    }

    makeIdle() {
        throw new Error('Method not implemented!');
    }

    killOtherActive() {
        throw new Error('Method not implemented!');
    }
}