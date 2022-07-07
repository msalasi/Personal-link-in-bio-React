export const loadVanta = () => {
  VANTA.WAVES({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x272759,
    waveHeight: 18.0,
    zoom: 0.98,
  });
};
