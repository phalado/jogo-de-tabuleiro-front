import React from "react";

import Images from "../constants/Images";
import styles from "../styles/Cell";

const wallImageData = () => {
  return {
    wall: {
      north: {
        src: Images.horizontalStonelWall,
        style: styles.topWall,
        alt: "North wall",
      },
      south: {
        src: Images.horizontalStonelWall,
        style: styles.bottomWall,
        alt: "South wall",
      },
      east: {
        src: Images.verticalStonelWall,
        style: styles.rightWall,
        alt: "East wall",
      },
      west: {
        src: Images.verticalStonelWall,
        style: styles.leftWall,
        alt: "West wall",
      },
    },
    openWall: {
      north: {
        src: Images.horizontalStoneOpenWall,
        style: styles.topWall,
        alt: "North open wall",
      },
      south: {
        src: Images.horizontalStoneOpenWall,
        style: styles.bottomWall,
        alt: "South open wall",
      },
      east: {
        src: Images.verticalStoneOpenWall,
        style: styles.rightWall,
        alt: "East open wall",
      },
      west: {
        src: Images.verticalStoneOpenWall,
        style: styles.leftWall,
        alt: "West open wall",
      },
    },
  };
};

const doorImageData = () => {
  return {
    north: {
      src: Images.horizontalStonelWall,
      rightStyle: styles.topRightWall,
      leftStyle: styles.topLeftWall,
      alt: "Top semi wall",
      doorStyle: styles.topDoor,
    },
    south: {
      src: Images.horizontalStonelWall,
      rightStyle: styles.bottomRightWall,
      leftStyle: styles.bottomLeftWall,
      alt: "Bottom semi wall",
      doorStyle: styles.bottomDoor,
    },
    east: {
      src: Images.verticalStoneOpenWall,
      style: styles.rightWall,
      alt: "Right open wall",
      doorStyle: styles.rightDoor,
    },
    west: {
      src: Images.verticalStoneOpenWall,
      style: styles.leftWall,
      alt: "Left open wall",
      doorStyle: styles.leftDoor,
    },
  };
};

const wall = (props) => {
  const { direction, wall, doors, changeThisDoorState } = props;

  switch (wall) {
    case "wall":
    case "openWall":
      const imageData = wallImageData()[wall][direction];
      return (
        <img src={imageData.src} style={imageData.style} alt={imageData.alt} />
      );
    case "open":
    case "endMap":
      return null;
    default:
      const door = doors.find((door) => door.name === wall);
      const doorImage = door.closed ? Images.closeDoor : Images.openDoor;
      const doorData = doorImageData()[direction];

      if (direction === "north" || direction === "south") {
        return (
          <div style={styles.wholeImage}>
            <img
              src={doorData.src}
              style={doorData.rightStyle}
              alt={doorData.alt}
            />
            <img
              src={doorData.src}
              style={doorData.leftStyle}
              alt={doorData.alt}
            />
            <div
              style={doorData.doorStyle}
              onClick={() => changeThisDoorState(door)}
            >
              <img
                src={doorImage}
                style={styles.wholeImage}
                alt={doorData.alt}
              />
            </div>
          </div>
        );
      }

      return (
        <div style={styles.wholeImage}>
          <img src={doorData.src} style={doorData.style} alt={doorData.alt} />
          <div
            style={doorData.doorStyle}
            onClick={() => changeThisDoorState(door)}
          >
            <img src={doorImage} style={styles.wholeImage} alt={doorData.alt} />
          </div>
        </div>
      );
  }
};

export default wall;
