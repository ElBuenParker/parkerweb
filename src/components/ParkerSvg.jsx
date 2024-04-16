import * as React from "react"
import { useEffect } from "react";
//svg
const ParkerSvg = (props) => {
  let cursorPos = { x: 0, y: 0 };
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

const seguirCursor = (el, xrelacion, yrelacion) => {
    const elOffset = el.getBoundingClientRect();
    const centerX = elOffset.x + elOffset.width / 2;
   
    const centerY = elOffset.y + elOffset.height / 2;
  
    const distanceLeft = Math.round(
      ((cursorPos.x - centerX) * 100) / window.innerWidth
    );
    const distanceTop = Math.round(
      ((cursorPos.y - centerY) * 100) / window.innerHeight
    );
  
    el.style.transform = `translate(${distanceLeft / xrelacion}px,${
      distanceTop / yrelacion
    }px)`;
  
  };
  const seguir = () => {
    if (cabeza) seguirCursor(cabeza, 6, 6);
    if (oreja1) seguirCursor(oreja1, 6, 6);
    if (oreja2) seguirCursor(oreja2, 6, 6);
    if (cuello) seguirCursor(cuello, 12, 12);
    if (cabello1) seguirCursor(cabello1, 6, 6);
    if (cabello2) seguirCursor(cabello2, 4, 4);
    if (cabello3) seguirCursor(cabello3, 6, 6);
    if (boca) seguirCursor(boca, 3, 3);
    if (lentes) seguirCursor(lentes, 6, 6);
    if (ceja1) seguirCursor(ceja1, 5, 5);
    if (ceja2) seguirCursor(ceja2, 5, 5);
    if (ojo1) seguirCursor(ojo1, 5, 5);
    if (ojo2) seguirCursor(ojo2, 5, 5);
    if (pupila1) seguirCursor(pupila1, 2, 2);
    if (pupila2) seguirCursor(pupila2, 2, 2);
    if (nariz) seguirCursor(nariz, 4, 4);
  };
  useEffect(() => {
    window.addEventListener("resize", definirTamaPantalla);
  window.addEventListener("mousemove", mouseMove);
  window.addEventListener('touchmove',touchMove);
  }, []);
  function definirTamaPantalla() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
  }
  function mouseMove(e) {
    cursorPos = { x: e.clientX, y: e.clientY };
    seguir();
  }
  
  function touchMove(e){
      cursorPos={x:e.targetTouche[0].offsetX,y:e.targetTouches[0].offsetY}
      seguir()
  }

  return (
  <svg
    height={500}
    viewBox="0 0 1080 1080"
    {...props}
    
  >
    <g id="saco"
      style={{
        display: "inline",
        fill: "#e5173d",
        fillOpacity: 1,
        stroke: "none",
      }}
    >
      <path
        d="m431.745 1084.183-4.95-10.162-25.275-51.33-17.978-32.31-4.17 13.29-3.908-8.6-11.985-22.407-12.768-29.704-22.929-52.372-20.323-38.042-7.557-25.274 3.127-17.457 9.446-22.731-8.843 5.159-19.162 12.528-22.109 17.687-38.322 20.635-57.484 23.584-80.33 30.215-67.8 23.583-19.162 17.688L0 1079.232l1.042-.521M1061.514 1079.753l-54.196-102.66-38.563-53.675-95.885-36.478-141.223-35.436-54.196-17.197-26.056-22.929-12.506-5.211 7.295 26.056 6.775 62.534-4.17 69.308-9.38 33.873-6.253 7.817-5.732-10.944 1.042 39.605-6.774 45.337"
        style={{
          fill: "#e5173d",
          stroke: "none",
          fillOpacity: 1,
        }}
      />
      <path
        d="m957.324 923.792 7.37 8.475-17.688 53.43-7.37 71.118-1.473 24.688-8.107-.368 6.633-63.748 8.106-54.904zM968.378 934.11l32.427 46.06 37.954 74.065 12.528 26.9 3.317-1.106-21.74-46.797-22.11-43.113-15.845-26.162-22.477-30.216zM941.847 964.14l7.37-35.558 2.948-9.028-47.535-18.793-71.301-21.924-94.701-23.768-57.668-18.056 7.554 13.45 65.59 15.108 82.173 22.11 76.46 21.74 27.82 9.58s1.659 15.108 1.659 16.03c0 .92-.369 29.11-.369 29.11zM643.927 810.483l1.106 7.554 9.396 5.895 29.479 36.849s41.455 54.167 41.455 55.272c0 1.106 15.66 24.873 16.213 26.347.553 1.474 13.45 20.083 13.45 20.083l4.606 11.607-4.606 4.79-31.69 16.214 28.005-7.37 17.319-10.87-15.108-29.664-16.03-26.53s-27.083-34.638-27.636-35.375c-.553-.737-20.266-25.241-20.266-25.241l-13.082-19.53-19.16-19.53-9.029-8.29zM653.324 962.298l32.61 23.952 46.614 25.241 29.847 14.924 6.817 13.45-11.607 30.03 6.817-28.925-5.712-11.607-22.109-10.87-65.59-30.032-20.082-15.845zM296.262 833.144l-14.371 12.897-18.793 42.376-19.898 68.907-.368 18.424 17.687 13.266 30.584 13.633 6.264 6.265-32.058-9.58-31.69-18.794 11.792-65.59 14.37-68.17 18.057-30.584 25.794-18.424-5.528 19.53zM267.152 820.616l-11.055 19.161-10.318 11.423s-52.693 18.424-54.535 19.898c-1.843 1.474-60.432 22.11-60.432 22.11l-42.744 16.581-23.215 9.95 2.58 14.002 4.79 16.95-6.633-7.37-14.74-17.687-14.002-9.212 61.169-21.372 79.961-30.584 48.272-19.899 29.479-15.476zM.368 976.485l14.74-27.636 11.791-3.685 16.582 11.423 30.953 54.167 15.108 52.325 8.107 15.476 4.053 1.843 1.474-6.633-16.214-59.695-24.688-58.957-21.74-29.847-11.055-4.79-11.423 2.579-15.477 16.582-4.053 6.632zM361.484 973.906l-36.112 22.109-32.058 18.792-29.479 21.373-8.475 14.739 10.318 22.846 15.107 9.95-11.423-21.005-1.105-18.424s34.638-21.74 37.954-24.688c3.316-2.948 42.744-26.9 42.744-26.9l15.108-12.897zM684.48 1309.562Z"
        style={{
          fill: "#fff",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 3,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
    </g>
    <g id="camisa"
      style={{
        display: "inline",
        fill: "#feffff",
        fillOpacity: 1,
        stroke: "#e5173d",
        strokeWidth: 3.2,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    >
      <path
        d="m621.692 1080.535 4.69-29.964 2.605-17.458-1.042-33.612v-4.69l5.732 10.422 6.254-7.035 9.12-34.654 3.126-51.33-.26-30.746-5.993-48.985-6.514-27.098-10.423-38.302-27.098-40.386-30.224-25.014-73.999-11.725-77.646 2.606-44.816 10.422-32.31 13.288-19.802 23.45-9.901 39.866-3.908 13.81-6.514 17.197-2.867 15.894 5.733 19.02 2.605 8.599 19.803 37.26 14.591 33.351 24.232 54.457 12.507 23.971 4.43-12.507 11.724 21.105 28.14 56.02 8.599 15.895"
        style={{
          display: "inline",
          fill: "#feffff",
          fillOpacity: 1,
          stroke: "#e5173d",
          strokeWidth: 3.2,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        stroke="none"
        d="m584.953 868.18 5.732-.782s1.303.521 5.472 18.24c4.169 17.717 11.204 41.167 11.204 41.167l13.55 45.598 8.076 22.408 1.564-4.69-15.113-54.457-15.373-55.498s-6.253-17.979-7.295-17.979c-1.042 0-7.556 1.563-7.556 1.563zM436.696 873.13l-9.38-7.816-15.113 13.288-10.422 34.654-15.113 68.527-4.69 15.373-2.605 1.824 8.077-39.084 13.288-63.315 14.592-30.486 10.422-4.69 3.648.782zM515.124 971.882l-15.113 40.647-3.648 34.915 2.345 34.654-5.732-.26-.782-37.52 3.648-31.789 16.415-45.598zM541.7 930.974l15.895 7.296 7.816 7.296 2.606 7.816 2.084-12.767-24.492-12.246zM341.77 726.836l-9.397 10.502v12.897l11.055 12.16 5.527 3.5-2.21-9.027-5.712-4.975-5.896-8.843 2.764-9.212 8.475-10.686-1.29-.737zM602.15 741.81l7.035 15.372 1.042 24.753-2.605 24.493-3.127 7.295-1.563-10.162 2.605-17.196-.52-26.838-3.388-10.683z"
        style={{
          fill: "#e5173d",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 3,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
    </g>
    <g id="cuello"
      style={{
        display: "inline",
        fill: "#feffff",
        fillOpacity: 1,
        stroke: "#e5173d",
        strokeOpacity: 1,
        strokeWidth: 3.7,
        strokeDasharray: "none",
      }}
    >
      <path
        d="m323.092 582.087 10.944 66.182 14.59 85.463-1.041 29.703 70.871 80.773 18.76 27.099 15.113 20.844 15.112 15.113 24.493 2.084 9.901 33.873 13.028 26.577 15.633-63.577v-7.295l36.479 5.732 11.985-26.577 19.282-44.295 5.732-21.366-5.732-39.083 5.732-60.97 9.38-51.07 6.253-25.014-48.463-17.718-119.857-22.929-77.647-8.859z"
        style={{
          fill: "#feffff",
          fillOpacity: 1,
          stroke: "#e5173d",
          strokeOpacity: 1,
          strokeWidth: 3.7,
          strokeDasharray: "none",
        }}
      />
      <path
        stroke="none"
        d="m332.993 604.495 37 44.295 69.83 56.802s50.547 24.492 50.547 26.576c0 2.085 32.31 7.296 32.31 7.296l54.717-33.872 33.351-30.746-1.042-14.592-51.07 40.126-38.562 19.803-49.506-13.028-92.238-64.097-43.773-49.506-7.296-10.944 4.69 17.718z"
        style={{
          fill: "#e5173d",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 3,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        stroke="none"
        d="m522.68 809.554 7.816-14.591 9.902-20.845-5.212-33.612-2.345-10.161-.52 13.288 3.387 30.485-12.247 28.14zM485.68 1223.581Z"
        style={{
          fill: "#e5173d",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 3,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
    </g>
    <g id="cabeza"
      style={{
        display: "inline",
        fill: "#feffff",
        fillOpacity: 1,
        stroke: "#e5173d",
        strokeOpacity: 1,
        strokeWidth: 3.8,
        strokeDasharray: "none",
      }}
    >
      <path
        d="m518.827 723.336 51.956-30.584 59.695-50.483 34.269-47.534 21.003-52.325 14.371-45.692 16.95-75.54-1.057-60.044-16.676-111.52-25.535-23.45-64.618-11.985-64.618 8.338-37 6.253-36.478-2.606-21.366 6.254-21.365-1.042-51.07-1.043-57.844 7.296-28.14 16.155-4.69 63.055-4.69 49.506 2.084 85.984 7.296 52.112 37 80.252 23.97 35.435 50.549 47.422 53.675 32.31 42.731 19.28z"
        style={{
          fill: "#feffff",
          fillOpacity: 1,
          stroke: "#e5173d",
          strokeOpacity: 1,
          strokeWidth: 3.8,
          strokeDasharray: "none",
        }}
      />
    </g>
    <g id="oreja1"
      style={{
        display: "inline",
        strokeWidth: 3.5,
        strokeDasharray: "none",
        stroke: "#e5173d",
        strokeOpacity: 1,
        fill: "#feffff",
        fillOpacity: 1,
      }}
    >
      <path
        d="m683.54 556.412 21.372-22.477 25.794-50.851 13.265-65.222-9.95-32.795-15.844-10.318-7.37 16.582-3.316 43.481-2.948 33.532-12.16 49.009-8.475 32.058z"
        style={{
          fill: "#feffff",
          fillOpacity: 1,
          stroke: "#e5173d",
          strokeWidth: 3.5,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        stroke="none"
        d="m724.073 399.07 4.422 34.637-5.528 36.111-5.895 18.056 8.843-17.319 7.37-32.426-4.79-25.426z"
        style={{
          fill: "#e5173d",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 3,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
    </g>
    <g id="cabello1"
      style={{
        display: "inline",
        fill: "#e5173d",
        fillOpacity: 1,
        stroke: "none",
      }}
    >
      <path
        d="m690.48 495.582 13.027 3.126 25.014-69.83 18.76-42.21 9.901-53.675-5.211-34.393 9.901 18.76.521 9.38 3.127-25.535-7.817-38.562-7.817-17.718 12.507 14.591 9.38 5.211 7.296 13.028-17.718-45.858-19.802-30.746-3.648-7.296 19.802 7.296 13.55 1.563 9.38 1.564 3.126 2.605-31.788-20.323-39.605-43.253-33.351-43.774-45.338-33.872-61.42-22.917-37.954-5.896h-41.639l-38.69 3.685-29.848 8.844-20.635 9.212-11.423 4.79-15.476-1.105-34.638 4.422-32.427 21.003-24.688 23.583-17.687 18.056-21.004 25.794-12.16 18.424-15.476 21.004-14.003 18.056-14.74 14.37-20.266 12.16-13.634 6.633-2.948 1.843h12.16l34.27-3.685 17.318-7.001-12.16 27.636-13.265 54.536-2.948 33.532 4.79 18.793 4.053 12.16 2.211 9.949 3.685-41.27 7.37-18.425-2.58 35.006 7.002 28.374 2.58 8.475 8.236-7.57 18.76 3.649 17.197 13.028 10.423 24.492 8.859 34.915 5.732 11.986 8.338 2.084 10.422-3.127-8.338-62.013-4.69-43.773-2.084-67.224 7.817-38.042 19.802-38.041 20.324-5.211 21.886.52 17.197 4.17 10.423 3.647 6.253 3.127 5.732-.521-7.816-9.901-2.606-6.254 12.507 7.296 15.112 3.127 9.901 3.126 3.127-.52-13.028-8.86-4.69-4.69 17.197 5.211 12.507 5.212 4.69-2.606 5.732-2.606 5.732 3.648 10.423-5.732 14.59-2.085 26.578 2.606 23.971 4.169 45.858-6.775 30.746-2.605 24.493 1.563 19.802 11.986 25.014 18.239 14.591 21.366 10.943 36.999 8.86 42.732-5.212 51.069-9.38 54.717z"
        style={{
          fill: "#e5173d",
          fillOpacity: 1,
          stroke: "none",
        }}
      />
      <path
        d="m182.08 242.184 47.376-44.194 16.97-18.385 24.042-28.638-41.719 59.044 39.598-33.234s-32.88 36.77-31.113 36.416c1.768-.354 57.276-57.276 57.276-57.276l-47.023 34.295 53.387-70.711-47.73 44.548 50.205-56.215 42.426-27.577 33.588-12.021h8.132l-9.193-4.243-36.416 4.95-32.88 21.567-31.82 31.112s-27.577 32.174-28.638 35.002c-1.06 2.829-22.274 29.345-22.274 29.345l-20.506 27.93-18.031 16.618-15.557 11.314-6.01 2.12zM393.151 67.882l59.397-18.031 36.77-3.89 20.152.708-30.052 7.071-14.849 8.839 39.245-10.253 54.447-.354 74.246 25.456 37.123 20.506s-42.426-32.173-43.84-32.173c-1.415 0-58.337-21.213-58.337-21.213l-55.861-6.01-66.468 6.363-45.962 18.385zM196.752 379.893l-4.95-22.627s1.238-27.224 1.238-29.522c0-2.298 11.844-37.653 11.844-37.653l-4.773 29.521-.884 30.23 14.673-29.523 7.07-16.263-.176 65.054 4.066 24.395-6.364 7.248-6.894-31.29.884-37.653-1.768-.177-7.602 14.142-4.242 23.512z"
        style={{
          fill: "#fff",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 3,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        d="m477.5 69.25 25.25-5 44.75 2 17.75 3.25 17 .5M580 75.25Z"
        style={{
          fill: "#fff",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 3,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
    </g>
    <g id="cabello2"
      style={{
        display: "inline",
        fill: "#e5173d",
        fillOpacity: 1,
        stroke: "none",
      }}
    >
      <path
        d="m272.679 322.056-.737 30.953 8.843 42.007 11.055 13.265v-25.794l13.266 15.477 14.739 14.002-9.58-30.216v-18.424l5.158 25.057 17.687 7.37 14.003 2.21-9.58-16.213 18.423 19.899 12.529 10.317-15.476-42.744 1.473-67.064 21.373-72.96 18.424-30.216 5.896-5.896 16.213 3.685 19.161 16.95 12.529 10.318-14.003-34.638-33.163-22.846-27.268-2.948-34.638 16.95-27.268 23.584-22.846 58.22zM454.71 220.354l19.899-19.898 10.317-2.211 18.424 25.057 23.583 76.645-2.947 54.535-8.107 33.164-7.37 10.318 30.953-21.372 19.161-29.48 10.318-16.95-20.635 41.27-19.162 22.11 33.164-21.372 9.58-15.477 8.844-8.106-12.528 23.583-13.266 11.054-14.74 11.792 23.584-4.422 23.583-14.74 12.528-12.528 6.633-11.791 8.844-23.583 2.948-8.107-5.896 28.005-11.792 25.794-9.58 7.37 12.403-2.944 17.718-11.204 14.33-9.901 29.183-35.697-11.986 20.584-23.71 25.014-7.557 8.077-4.95 7.817 8.598 1.563 26.838-5.732 23.71-33.873 3.909-9.9-10.944 31.006-8.598 18.5-7.556 10.682 15.373.782 17.718-7.556 25.278-26.748 13.634-31.322.369-37.216-9.58-49.009-11.792-29.11-9.95-12.16-25.056-32.427-42.745-37.585-39.428-19.899-52.693-8.106-37.217 1.842-20.266 8.475-16.95 15.108-5.16 19.161 2.211 38.323z"
        style={{
          fill: "#e5173d",
          fillOpacity: 1,
          stroke: "none",
        }}
      />
      <path
        d="M454.5 142.5 479 118l59-5.5 47.5 8.5 48.5 22 23 20-29.5-30.5L571 110l-56.5-3-42.5 10.5-15 16.5Z"
        style={{
          fill: "#fff",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 3,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        d="m537.5 158 11 38 1 20.5-2 12L561 186l.5-9.5 21.5 45 9.5 36L596 273l-1.5-50-24.5-53-18.5-20.5L556 186l-6 10zM597 182.5l31 35.25 5 21.75-19.75-25.25-13-20.5zM640 182.5l29.75 31.75 16 46.75 2 29.5-1.5 7.75-5.75-40.5L665 216.5 643.5 195ZM662.5 185.5l25.75 30.25 1.5 23.5L680 213.5l-19-24.25ZM429.567 194.1l-23.688-16.616-26.87-9.193-24.395 18.739-18.385 20.506 27.931-22.628-15.91 24.75 20.153-17.325-17.324 23.335 26.87-19.446-54.448 51.619 23.688-45.255-22.627 24.042 6.364-16.617-12.02 10.606 36.769-44.901 18.738-12.374 25.456 4.596 23.334 13.788z"
        style={{
          fill: "#fff",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 3,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        d="M344.715 179.959 316.43 214.96l-15.203 42.78-7.424 64.7 4.95 44.195 11.313 28.638-19.445-25.81-3.536-80.256L298.4 231.93l23.335-38.89 10.96-6.718L319.966 204zM274.888 327.214l6.364 39.598 8.308 28.107-1.06 3.712-9.723-25.279-3.712-34.294z"
        style={{
          fill: "#fff",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 3,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        d="m311.127 306.884 2.652 49.144 7.247 20.506 10.607 12.728 7.778 3.359-14.672-2.475-13.789-27.577-2.298-50.028zM515.25 211.75l17.25 41.75 5.5 44.25.75 16.75 4-34.75L530 229ZM496.25 203.75l25 38.75 8.75 39.75-1 14.75-4.75-29.75-8.75-28.75-13.25-23zM780.646 1402.9Z"
        style={{
          fill: "#fff",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 3,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        d="m389.188 225.563 1.312 3.375 4.5-.125zM411.625 225.188l4.313 4.5 11.062-.125s-13.25-4.688-13.5-4.625c-.25.062-1.875.25-1.875.25z"
        style={{
          fill: "#fff",
          strokeWidth: 3,
        }}
      />
    </g>
    <path id="cabello3"
      d="m289.998 547.2 4.053 20.635s9.95 35.006 8.844 37.586c-1.106 2.58-1.474 29.479-1.474 29.479l-1.106 7 10.686-24.32 3.685-21.003 6.633 29.847 14.37 20.267-3.316-45.692-11.054-37.586-3.685-11.054-16.213-6.264z"
      style={{
        display: "inline",
        fill: "#e5173d",
        fillOpacity: 1,
        stroke: "none",
      }}
    />
    <g id="oreja2"
      style={{
        display: "inline",
        strokeWidth: 3.8,
        strokeDasharray: "none",
        stroke: "#e5173d",
        strokeOpacity: 1,
        fill: "#feffff",
        fillOpacity: 1,
      }}
    >
      <path
        d="m264.727 416.372-17.718-19.281-18.239-2.085-13.549 22.93 4.169 42.21 18.24 40.647 25.534 31.267 21.366 16.676 20.844 4.69 7.296 1.563-16.155-40.126-12.507-35.957-6.253-34.394-8.338-22.929z"
        style={{
          display: "inline",
          fill: "#feffff",
          fillOpacity: 1,
          stroke: "#e5173d",
          strokeWidth: 3.8,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        stroke="none"
        d="m238.41 453.892-5.471-12.767.521-20.845 5.472-6.253-1.303-5.732 11.465 9.9 11.725 18.24 9.9 26.056 6.515 21.366 3.648 10.943 7.816 8.598 2.085 3.648 8.338 16.155-1.564 2.605-11.204-6.253-10.682-.521-13.289-11.725-4.69-13.028h3.908l6.514 11.986 7.296 6.774 10.422 1.563 5.993 3.127-5.472-9.38-9.12-11.725-6.774-25.795-8.337-19.282-5.733-14.59-2.605 4.95v11.725l3.387 16.154 1.042 7.296-7.035-15.112-1.303-20.324 2.866-6.253-6.253-14.07-3.908-3.648-4.95 5.21.52 10.163z"
        style={{
          fill: "#e5173d",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 3,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
    </g>
    <g id="ceja2"
      style={{
        display: "inline",
        stroke: "none",
      }}
    >
      <path
        d="m459.132 364.8-14.74-21.004-55.64-.737-43.113 8.844-17.319 5.159 33.9-1.474 50.483 2.21 26.9 4.054z"
        style={{
          fill: "#e5173d",
          fillOpacity: 1,
          stroke: "none",
        }}
      />
    </g>
    <g id="ceja1"
      style={{
        display: "inline",
        fill: "#e5173d",
        fillOpacity: 1,
        stroke: "none",
      }}
    >
      <path
        d="m432.438 322.069 14.74-21.004 55.641-.737 43.113 8.844 17.319 5.158-33.901-1.474-50.482 2.211-26.9 4.054z"
        style={{
          fill: "#e5173d",
          fillOpacity: 1,
          stroke: "none",
        }}
        transform="translate(123.823 39.441)"
      />
    </g>
    <g id="boca"
      style={{
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#e5173d",
        strokeOpacity: 1,
        strokeWidth: 3,
        strokeDasharray: "none",
      }}
    >
      <path
        d="m431.484 597.46 26.056-3.387 57.844-.521 35.957 1.563 26.577 3.127 12.767 2.345-.52 6.253-21.627 17.979-20.063 15.633-25.535 10.422-22.408 1.564-37.26-11.986-21.105-20.845-7.817-12.506-3.647-7.036z"
        style={{
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#e5173d",
          strokeOpacity: 1,
          strokeWidth: 3,
          strokeDasharray: "none",
        }}
      />
      <path
        d="m445.13 620.897 4.053.369 7.738 1.842 9.58-1.842 4.423-2.58 5.895-.737 13.266 2.211 5.159-3.685-10.686.369-9.95-2.211-5.527-3.317-7.738 5.896-7.738-2.948-9.95-8.106-5.895-8.107-5.527.737 4.053 9.58 9.028 13.819zM575.312 599.284l2.867 4.43-2.345 5.992-14.722 4.3-4.169.65 7.426 1.694 6.123.13 5.863.782 12.897-10.552-1.042-5.602z"
        style={{
          fill: "#e5173d",
          fillOpacity: 1,
          stroke: "#e5173d",
          strokeWidth: 3,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
    </g>
    <g 
      style={{
        display: "inline",
        stroke: "none",
        fill: "#e5173d",
        fillOpacity: 1,
      }}
    >
      <path id="ojo1"
        d="m568.572 441.813-4.422-9.58 11.792-19.53 17.319-14.002 35.006-9.58 25.794-1.106 21.003 7 11.792 11.792 5.159 8.844-3.317 9.95-5.158 5.895-11.424-19.898-16.95-11.055-22.477-2.948-30.216 6.264-17.687 13.266-11.792 15.845zM587.733 463.923l17.688 6.264 26.162-1.843 14.74-6.264 14.37-9.949-7.37 10.318-16.213 9.949-15.476 2.948-19.898-1.474z"
        style={{
          fill: "#e5173d",
          fillOpacity: 1,
          stroke: "none",
        }}
      />
      <path id="pupila1"
        d="m588.102 418.599 8.844-1.106 4.79 2.948.368 8.475-10.686 8.107-4.79.369 8.107 10.317 15.108 6.264h12.897l14.37-8.843 4.79-15.108-2.947-17.319-7.738-8.844-7.739-3.316-8.475.737-16.582 4.053-9.212 8.476z"
        style={{
          fill: "#e5173d",
          fillOpacity: 1,
          stroke: "none",
        }}
      />
    </g>
    <g 
      style={{
        display: "inline",
        stroke: "none",
      }}
    >
      <path id="ojo2"
        d="m440.34 440.34-12.16-19.162-22.478-15.845-27.268-7.738-17.687.737-15.845 6.264-8.475 7.002-6.265 8.843-5.158 8.475-2.948-4.421v-8.844l11.791-13.265 23.215-11.055 20.635-1.842 33.164 6.264 19.53 12.528 8.106 13.266 6.264 10.686-4.422 10.317zM412.703 465.765l-16.95 5.527-28.742.369-15.845-7.37-7.37-6.264 6.633 10.317 10.686 8.107 17.319 3.316 18.424-1.842 10.318-5.159z"
        style={{
          fill: "#e5173d",
          fillOpacity: 1,
          stroke: "none",
        }}
      />
      <path id="pupila2"
        d="m354.851 414.546 8.107-9.95 10.317-2.947 13.266-.737 11.054 2.579 8.475 7.001 4.422 12.529.369 12.16-7.37 11.791-11.423 6.633-10.318 2.58-15.476-2.212-12.897-11.423-1.842-8.843 6.632-1.106 10.318-2.21 2.58-11.055-6.633-4.054h-5.896z"
        style={{
          fill: "#e5173d",
          fillOpacity: 1,
          stroke: "none",
        }}
      />
    </g>
    <g 
      style={{
        display: "inline",
        stroke: "none",
      }}
    >
      <path id="nariz"
        d="m527.118 450.657-4.054 15.108-1.842 21.556 3.316 15.477 4.975 13.08 3.132 5.897-.737-11.976-5.159-18.424.184-17.872.737-18.24zM533.566 527.67l.737 13.819-5.896 12.528-4.974 5.712-4.606 5.343 9.212-4.054 8.844-13.634.368-10.87zM506.298 555.307l-7.738 2.58-4.79 1.842 1.29 3.132 9.58-.369 3.316-2.948-1.105-3.316z"
        style={{
          fill: "#e5173d",
          fillOpacity: 1,
          stroke: "none",
        }}
      />
    </g>
    <path id="lentes"
      d="m316.318 442.949-20.845-2.085.782-17.718 16.154-2.345h2.866l1.303-7.816h4.69l.26 44.816 3.91 14.852 14.33 4.95 47.943 3.127 70.09-4.95 11.204-3.388 3.126-6.514 2.606-33.612 1.042-8.598 4.17.52.26 14.853-.521 8.598 12.246-5.211 20.584-1.564 16.155-.26 6.253 2.084 5.993 4.951-.782-25.274 5.732.52-.52 18.761.26 9.38 1.303 16.415 7.816 5.733 25.014 3.126 21.366.782 29.964.782 39.084-5.993 12.506-4.17 5.993-6.774-1.042-29.182 1.042-16.155 1.824-2.866 14.07 1.564 4.69.26-2.084 17.718s-3.127 2.084-4.43 2.084h-9.9l.26 20.324-3.387 13.028-13.028 7.817-25.796 4.169-45.076 3.647-39.866-2.605-17.718-4.69-3.908-4.17-2.606-15.112-5.992-7.556-11.465-3.126-26.837.52-9.38 2.085-7.296 4.43-3.909 7.556.522 10.683-2.606 4.43-34.915 7.555-31.267 2.085-67.745-1.824-17.978-4.43-5.993-9.119-.521-16.676z"
      style={{
        display: "inline",
        fill: "#e5173d",
        fillOpacity: 1,
        stroke: "none",
        strokeOpacity: 1,
      }}
    />
  </svg>)

}
export default ParkerSvg
