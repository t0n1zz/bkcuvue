
<template>
  <div>
    <div id="customtoolbar">
      <select class="ql-size">
        <option value="small"></option>
        <option selected></option>
        <option value="large"></option>
        <option value="huge"></option>
      </select>
      <span class="ql-formats">
        <button type="button" class="ql-bold">
          <svg viewBox="0 0 18 18">
            <path
              class="ql-stroke"
              d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
            />
            <path
              class="ql-stroke"
              d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
            />
          </svg>
        </button>
        <button type="button" class="ql-italic">
          <svg viewBox="0 0 18 18">
            <line class="ql-stroke" x1="7" x2="13" y1="4" y2="4" />
            <line class="ql-stroke" x1="5" x2="11" y1="14" y2="14" />
            <line class="ql-stroke" x1="8" x2="10" y1="14" y2="4" />
          </svg>
        </button>
        <button type="button" class="ql-underline">
          <svg viewBox="0 0 18 18">
            <path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3" />
            <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15" />
          </svg>
        </button>
        <button type="button" class="ql-strike">
          <svg viewBox="0 0 18 18">
            <line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5" />
            <path
              class="ql-fill"
              d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"
            />
            <path
              class="ql-fill"
              d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"
            />
          </svg>
        </button>
      </span>
      <span class="ql-formats">
        <button type="button" class="ql-align ql-active" value>
          <svg viewBox="0 0 18 18">
            <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9" />
            <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14" />
            <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4" />
          </svg>
        </button>
        <button type="button" class="ql-align" value="center">
          <svg viewBox="0 0 18 18">
            <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9" />
            <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14" />
            <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4" />
          </svg>
        </button>
        <button type="button" class="ql-align" value="right">
          <svg viewBox="0 0 18 18">
            <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9" />
            <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14" />
            <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4" />
          </svg>
        </button>
        <button type="button" class="ql-align" value="justify">
          <svg viewBox="0 0 18 18">
            <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9" />
            <line class="ql-stroke" x1="15" x2="3" y1="14" y2="14" />
            <line class="ql-stroke" x1="15" x2="3" y1="4" y2="4" />
          </svg>
        </button>
      </span>
      <span class="ql-formats">
        <button type="button" class="ql-header" value="1">
          <svg viewBox="0 0 18 18">
            <path
              class="ql-fill"
              d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"
            />
          </svg>
        </button>
        <button type="button" class="ql-header" value="2">
          <svg viewBox="0 0 18 18">
            <path
              class="ql-fill"
              d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"
            />
          </svg>
        </button>
      </span>
      <span class="ql-formats">
        <button type="button" class="ql-blockquote">
          <svg viewBox="0 0 18 18">
            <rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5" />
            <rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5" />
            <path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5" />
            <path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5" />
          </svg>
        </button>
        <button type="button" class="ql-code-block">
          <svg viewBox="0 0 18 18">
            <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11" />
            <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11" />
            <line class="ql-stroke" x1="10" x2="8" y1="5" y2="13" />
          </svg>
        </button>
      </span>
      <span class="ql-formats">
        <button type="button" class="ql-list" value="ordered">
          <svg viewBox="0 0 18 18">
            <line class="ql-stroke" x1="7" x2="15" y1="4" y2="4" />
            <line class="ql-stroke" x1="7" x2="15" y1="9" y2="9" />
            <line class="ql-stroke" x1="7" x2="15" y1="14" y2="14" />
            <line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5" />
            <path
              class="ql-fill"
              d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
            />
            <path
              class="ql-stroke ql-thin"
              d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
            />
            <path
              class="ql-stroke ql-thin"
              d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
            />
          </svg>
        </button>
        <button type="button" class="ql-list" value="bullet">
          <svg viewBox="0 0 18 18">
            <line class="ql-stroke" x1="6" x2="15" y1="4" y2="4" />
            <line class="ql-stroke" x1="6" x2="15" y1="9" y2="9" />
            <line class="ql-stroke" x1="6" x2="15" y1="14" y2="14" />
            <line class="ql-stroke" x1="3" x2="3" y1="4" y2="4" />
            <line class="ql-stroke" x1="3" x2="3" y1="9" y2="9" />
            <line class="ql-stroke" x1="3" x2="3" y1="14" y2="14" />
          </svg>
        </button>
        <button type="button" class="ql-list" value="check">
          <svg class viewBox="0 0 18 18">
            <line class="ql-stroke" x1="9" x2="15" y1="4" y2="4" />
            <polyline class="ql-stroke" points="3 4 4 5 6 3" />
            <line class="ql-stroke" x1="9" x2="15" y1="14" y2="14" />
            <polyline class="ql-stroke" points="3 14 4 15 6 13" />
            <line class="ql-stroke" x1="9" x2="15" y1="9" y2="9" />
            <polyline class="ql-stroke" points="3 9 4 10 6 8" />
          </svg>
        </button>
      </span>
      <span class="ql-formats">
        <button type="button" class="ql-script" value="sub">
          <svg viewBox="0 0 18 18">
            <path
              class="ql-fill"
              d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"
            />
            <path
              class="ql-fill"
              d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"
            />
          </svg>
        </button>
        <button type="button" class="ql-script" value="super">
          <svg viewBox="0 0 18 18">
            <path
              class="ql-fill"
              d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"
            />
            <path
              class="ql-fill"
              d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"
            />
          </svg>
        </button>
      </span>
      <span class="ql-formats">
        <button type="button" class="ql-indent" value="-1">
          <svg viewBox="0 0 18 18">
            <line class="ql-stroke" x1="3" x2="15" y1="14" y2="14" />
            <line class="ql-stroke" x1="3" x2="15" y1="4" y2="4" />
            <line class="ql-stroke" x1="9" x2="15" y1="9" y2="9" />
            <polyline class="ql-stroke" points="5 7 5 11 3 9 5 7" />
          </svg>
        </button>
        <button type="button" class="ql-indent" value="+1">
          <svg viewBox="0 0 18 18">
            <line class="ql-stroke" x1="3" x2="15" y1="14" y2="14" />
            <line class="ql-stroke" x1="3" x2="15" y1="4" y2="4" />
            <line class="ql-stroke" x1="9" x2="15" y1="9" y2="9" />
            <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7" />
          </svg>
        </button>
      </span>
      <span class="ql-formats">
        <select class="ql-color">
          <option selected="selected"></option>
          <option value="#e60000"></option>
          <option value="#ff9900"></option>
          <option value="#ffff00"></option>
          <option value="#008a00"></option>
          <option value="#0066cc"></option>
          <option value="#9933ff"></option>
          <option value="#ffffff"></option>
          <option value="#facccc"></option>
          <option value="#ffebcc"></option>
          <option value="#ffffcc"></option>
          <option value="#cce8cc"></option>
          <option value="#cce0f5"></option>
          <option value="#ebd6ff"></option>
          <option value="#bbbbbb"></option>
          <option value="#f06666"></option>
          <option value="#ffc266"></option>
          <option value="#ffff66"></option>
          <option value="#66b966"></option>
          <option value="#66a3e0"></option>
          <option value="#c285ff"></option>
          <option value="#888888"></option>
          <option value="#a10000"></option>
          <option value="#b26b00"></option>
          <option value="#b2b200"></option>
          <option value="#006100"></option>
          <option value="#0047b2"></option>
          <option value="#6b24b2"></option>
          <option value="#444444"></option>
          <option value="#5c0000"></option>
          <option value="#663d00"></option>
          <option value="#666600"></option>
          <option value="#003700"></option>
          <option value="#002966"></option>
          <option value="#3d1466"></option>
        </select>
        <select class="ql-background">
          <option value="#000000"></option>
          <option value="#e60000"></option>
          <option value="#ff9900"></option>
          <option value="#ffff00"></option>
          <option value="#008a00"></option>
          <option value="#0066cc"></option>
          <option value="#9933ff"></option>
          <option selected="selected"></option>
          <option value="#facccc"></option>
          <option value="#ffebcc"></option>
          <option value="#ffffcc"></option>
          <option value="#cce8cc"></option>
          <option value="#cce0f5"></option>
          <option value="#ebd6ff"></option>
          <option value="#bbbbbb"></option>
          <option value="#f06666"></option>
          <option value="#ffc266"></option>
          <option value="#ffff66"></option>
          <option value="#66b966"></option>
          <option value="#66a3e0"></option>
          <option value="#c285ff"></option>
          <option value="#888888"></option>
          <option value="#a10000"></option>
          <option value="#b26b00"></option>
          <option value="#b2b200"></option>
          <option value="#006100"></option>
          <option value="#0047b2"></option>
          <option value="#6b24b2"></option>
          <option value="#444444"></option>
          <option value="#5c0000"></option>
          <option value="#663d00"></option>
          <option value="#666600"></option>
          <option value="#003700"></option>
          <option value="#002966"></option>
          <option value="#3d1466"></option>
        </select>
      </span>
      <span class="ql-formats">
        <button type="button" class="ql-link">
          <svg viewBox="0 0 18 18">
            <line class="ql-stroke" x1="7" x2="11" y1="7" y2="11" />
            <path
              class="ql-even ql-stroke"
              d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
            />
            <path
              class="ql-even ql-stroke"
              d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
            />
          </svg>
        </button>
        <button type="button" class="ql-image">
          <svg viewBox="0 0 18 18">
            <rect class="ql-stroke" height="10" width="12" x="3" y="4" />
            <circle class="ql-fill" cx="6" cy="7" r="1" />
            <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12" />
          </svg>
        </button>
        <button type="button" class="ql-video">
          <svg viewBox="0 0 18 18">
            <rect class="ql-stroke" height="12" width="12" x="3" y="3" />
            <rect class="ql-fill" height="12" width="1" x="5" y="3" />
            <rect class="ql-fill" height="12" width="1" x="12" y="3" />
            <rect class="ql-fill" height="2" width="8" x="5" y="8" />
            <rect class="ql-fill" height="1" width="3" x="3" y="5" />
            <rect class="ql-fill" height="1" width="3" x="3" y="7" />
            <rect class="ql-fill" height="1" width="3" x="3" y="10" />
            <rect class="ql-fill" height="1" width="3" x="3" y="12" />
            <rect class="ql-fill" height="1" width="3" x="12" y="5" />
            <rect class="ql-fill" height="1" width="3" x="12" y="7" />
            <rect class="ql-fill" height="1" width="3" x="12" y="10" />
            <rect class="ql-fill" height="1" width="3" x="12" y="12" />
          </svg>
        </button>
        <button type="button" class="ql-formula">
          <svg viewBox="0 0 18 18">
            <path
              class="ql-fill"
              d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"
            />
            <rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2" />
            <path
              class="ql-fill"
              d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"
            />
          </svg>
        </button>
      </span>
      <span class="ql-formats">
        <button type="button" class="ql-direction" value="rtl">
          <svg viewBox="0 0 18 18">
            <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11" />
            <line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4" />
            <path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z" />
            <rect class="ql-fill" height="11" width="1" x="11" y="4" />
            <rect class="ql-fill" height="11" width="1" x="13" y="4" />
          </svg>
          <svg viewBox="0 0 18 18">
            <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12" />
            <line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4" />
            <path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z" />
            <rect class="ql-fill" height="11" width="1" x="5" y="4" />
            <rect class="ql-fill" height="11" width="1" x="7" y="4" />
          </svg>
        </button>
      </span>
      <span class="ql-formats">
        <button type="button" class="ql-clean">
          <svg class viewBox="0 0 18 18">
            <line class="ql-stroke" x1="5" x2="13" y1="3" y2="3" />
            <line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3" />
            <line class="ql-stroke" x1="11" x2="15" y1="11" y2="15" />
            <line class="ql-stroke" x1="15" x2="11" y1="11" y2="15" />
            <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14" />
          </svg>
        </button>
      </span>

      <span class="ql-formats">
        <button class="ql-table"></button>
      </span>
    </div>
    <vue-editor ref="editor" v-model="form.content" :editorOptions="editorOption"></vue-editor>
    <app-modal
      :size="modalSize"
      :show="modalShow"
      :state="modalState"
      :title="modalTitle"
      :content="modalContent"
      :color="modalColor"
      @batal="modalTutup"
      @tutup="modalTutup"
      @successOk="modalTutup"
      @failOk="modalTutup"
      @backgroundClick="modalBackgroundClick"
    >
      <!-- title -->
      <template slot="modal-title">{{ modalTitle }}</template>

      <!-- tambah penulis -->
      <template slot="modal-body1">
        <form @submit.prevent="addtabel" data-vv-scope="form">
          <div class="row">
            <div class="col-md-5">
              <div class="form-group">
              <label class="col-form-label">Row </label>
                <input type="number" class="form-control" v-model="formtable.row" />
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
              <h3>X</h3>
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-group">
              <label class="col-form-label">Kolom</label>
                <input type="number" class="form-control"  v-model="formtable.colom" />
              </div>
            </div>
          </div>

          <hr>
          <form-button
            :cancelTitle="cancelTitle"
            :cancelIcon="cancelIcon"
            :cancelState="cancelState"
            :formValidation="'form'"
            @cancelClick="cancelClick"
          ></form-button>
        </form>
      </template>

      <template slot="modal-body2" class="form-horizontal">
				<form @submit.prevent="choice" enctype="multipart/form-data" data-vv-scope="form">
				<file-manager v-bind:settings="settings" ></file-manager>
				</hr>
				<form-button
					:cancelState="'methods'"
					:formValidation="'form'"
					@cancelClick="cancelClick"></form-button>
				</form>
			</template>
    </app-modal>
  </div>
</template>
<script>
import appModal from "../components/modal";
import formButton from "../components/formButton.vue";
import { mapGetters } from "vuex";
import { ImageDrop } from "quill-image-drop-module";
import { Quill } from "vue-quill2-editor";
import * as QuillTableUI from "quill-table-ui";
import QuillBetterTable from "quill-better-table";
import quillTable from "quill-table";
import { getLocalUser } from "../helpers/auth";
import  ImageResize  from 'quill-image-resize-module';
import VideoResize from 'quill-video-resize-module';
 

//const quillTable = require('quill-table');
Quill.register(quillTable.TableCell);
Quill.register(quillTable.TableRow);
Quill.register(quillTable.Table);
Quill.register(quillTable.Contain);
Quill.register("modules/table", quillTable.TableModule);
Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/ImageResize", ImageResize);
Quill.register('modules/VideoResize', VideoResize);

Quill.register(
  {
    "modules/better-table": QuillBetterTable
  },
  true
);


export default {
  components: {
    appModal,
    formButton
  },
  data() {
    return {
      modalShow: false,
      modalState: "",
      modalTitle: "",
      modalColor: "",
      modalContent: "",
      modalSize: "",
      image:'',
      submited: false,
      cancelTitle: "Tutup",
      cancelIcon: "icon-cross",
      cancelState: "methods",
      formtable: {
        row: 1,
        colom: 1
      },
      settings: {

        headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Bearer `+getLocalUser().token,
        },
        // baseUrl: 'https://bkcuvue.test/admins/filemanager/tree?disk=CUKB',   // overwrite base url Axios
        windowsConfig: 1,                           // overwrite config
      },
      editorOption: {
        modules: {
          imageDrop: true,
          table: false,
          ImageResize: {
            modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
        },
         VideoResize: {
           modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
         },
          "better-table": {
            operationMenu: {
              items: {
                unmergeCells: {
                  text: "Another unmerge cells name"
                }
              }
            }
          },
          keyboard: {
            bindings: QuillBetterTable.keyboardBindings
          },
          toolbar: {
            container: "#customtoolbar",
            handlers: {
              image: () => {
                this.modalOpen_FileManager(this.$route.path);
              },
              table: () => {
                this.showModalTable();
              }
            }
          },
          
        }
      }
    };
  },
  methods: {
    choice(){
        let url = this.selectedItems[0].path;
        let quill = this.$refs.editor.quill;
        quill.insertEmbed(10, 'image', '/../storage/'+ url);
        this.modalTutup()	;
				//insertEmbed(10, 'image', 'https://quilljs.com/images/cloud.png');
    },

    showModalTable() {
      this.formtable.row =1;
      this.formtable.colom = 1;
      this.modalShow = true;
      
      this.modalSize = "modal-xs";
      this.modalState = "normal1";
      this.modalColor = "bg-primary";
      this.modalTitle = "Tambah Table ";
    },
    modalTutup() {
     
      this.modalShow=false;
     
    },
    modalBackgroundClick() {
      if (this.modalState === "success") {
        this.modalTutup;
      } else if (this.modalState === "loading") {
        // do nothing
      } else {
        this.modalShow = false;
      }
    },
    modalOpen_FileManager(currentUrl){
				this.modalShow = true;
				this.modalState = 'normal2';
				this.modalSize = 'modal-full';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Upload image';
			},
    cancelClick() {
      this.$emit("cancelClick");
      this.modalShow=false;
    },
    addtabel() {
      let table = this.$refs.editor.quill.getModule("better-table");
      console.log(this.formtable);
      table.insertTable(Number(this.formtable.row),Number(this.formtable.colom));
      this.modalTutup();
  
    }
  },
  computed: {
    ...mapGetters("artikel", {
      form: "data"
    }),
    ...mapGetters('fm',{
        selectedItems:'selectedItems',
			}),
  }
};
</script>
<style lang="css" >
  .quillWrapper .ql-container {
      margin-left: 15%;
      margin-right: 20%;
  }
  @media screen and (max-width: 800px) {
   .quillWrapper {
      margin-left: -15%;
      margin-right: -20%;
  }
}
</style>

