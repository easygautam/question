const PROXY_CONFIG = [
  {
    context: [
      "/my",
      "/many",
      "/endpoints",
      "/i",
      "/need",
      "/to",
      "/proxy"
    ],
    target: "http://leads.ihabitat.in",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
