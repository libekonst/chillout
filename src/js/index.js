//@ts-check
import { requestJSON } from "./populateDOM";
import addPlayButtonControls from "./playButton";
import addVolumeControls from "./volume-bar";


requestJSON();
addPlayButtonControls();
addVolumeControls();