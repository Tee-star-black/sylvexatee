.officeBackdrop {
  background:
    linear-gradient(
      90deg,
      rgba(2, 8, 18, 0.94) 0%,
      rgba(3, 13, 26, 0.84) 36%,
      rgba(3, 13, 26, 0.58) 68%,
      rgba(2, 8, 18, 0.72) 100%
    ),
    linear-gradient(
      180deg,
      rgba(4, 12, 24, 0.32) 0%,
      rgba(2, 8, 18, 0.52) 100%
    ),
    url("/images/hero office.jpg") center / cover no-repeat !important;
}

.officeBackdrop::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(circle at 18% 46%, rgba(48, 152, 222, 0.1), transparent 34%),
    linear-gradient(180deg, transparent 68%, rgba(2, 8, 18, 0.5) 100%);
}

@media (max-width: 900px) {
  .officeBackdrop {
    background-position: 62% center !important;
  }
}

@media (max-width: 700px) {
  .officeBackdrop {
    background:
      linear-gradient(
        180deg,
        rgba(2, 8, 18, 0.88) 0%,
        rgba(2, 8, 18, 0.74) 50%,
        rgba(2, 8, 18, 0.9) 100%
      ),
      url("/images/hero office.jpg") 66% center / cover no-repeat !important;
  }
}
