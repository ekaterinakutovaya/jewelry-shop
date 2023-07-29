import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { SlowMo } from "gsap/dist/EasePack";

import {Mozaic} from "Icons";
import styles from "./LogoIcon.module.scss";

const LogoIcon = ({color}) => {
  const logo = useRef();
  const loaderGradient = useRef(null);
  const [colorValue, setColorValue] = useState('');
  const [pathFill, setPathFill] = useState('');
  gsap.registerPlugin(SlowMo);

  useEffect(() => {
    setColorValue(color);
  }, [color])

  useEffect(() => {
    setPathFill(loaderGradient.current);

    console.log(loaderGradient.current);
  }, [])

  useLayoutEffect(() => {
    gsap.fromTo(
      logo.current,
      {
        attr: { x1: "-100%", x2: "0%", y1: "-100%", y2: "0%" },
        duration: 2.5,
      },
      {
        attr: { x1: "100%", x2: "200%", y1: "100%", y2: "200%" },
        repeat: -1,
        ease: SlowMo.ease.config(0.25, 0.5, false),
      }
    );
  }, [])
  
  console.log(loaderGradient);

  return (
    <>
      <linearGradient
        ref={loaderGradient}
        gradientUnits="userSpaceOnUse"
        x1="0"
        y1="0"
        x2="100%"
        y2="100%"
      >
        <stop offset="0" style={{ stopColor: "#fff" }} stopOpacity="0"></stop>
        <stop offset="0.5" style={{ stopColor: "#fff" }}></stop>
        <stop offset="1" style={{ stopColor: "#fff" }} stopOpacity="0"></stop>
      </linearGradient>

      <div ref={logo} className={styles.logo}>
        <div>
          <svg>
            <symbol viewBox="0 0 735.000000 735.000000">
              <g
                // transform="translate(0.000000,735.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  // fill={pathFill && `${url(pathFill)}`}
                  
                  d="M2196 6977 c-967 -242 -1452 -367 -1458 -377 -11 -20 -728 -2898
-728 -2924 0 -36 722 -2920 734 -2932 11 -12 2896 -734 2931 -734 35 0 2920
722 2931 734 12 11 734 2896 734 2931 0 35 -722 2920 -734 2931 -13 14 -2899
734 -2936 734 -14 -1 -677 -164 -1474 -363z m1632 79 c74 -19 135 -36 137 -38
4 -4 -277 -328 -288 -331 -9 -2 -297 326 -292 332 7 7 261 69 285 70 14 0 85
-15 158 -33z m-514 -333 c108 -124 195 -230 194 -234 -2 -4 -100 -118 -218
-255 -118 -136 -218 -251 -221 -256 -5 -8 -644 204 -658 218 -3 3 22 141 54
309 l59 304 280 70 c155 38 288 70 297 70 10 1 99 -93 213 -226z m1226 157
l286 -71 59 -304 c32 -168 57 -306 54 -309 -14 -14 -653 -226 -658 -218 -3 5
-103 120 -221 256 -118 137 -216 251 -218 255 -4 10 388 461 401 461 5 0 139
-32 297 -70z m-2283 -167 c-78 -422 -81 -434 -103 -429 -12 3 -113 38 -225 77
l-204 70 -37 80 -37 79 27 7 c15 3 146 37 292 74 146 37 271 68 279 68 9 1 12
-7 8 -26z m3106 -38 c144 -37 279 -70 299 -76 l37 -9 -37 -80 -37 -79 -204
-70 c-112 -39 -213 -74 -225 -77 -22 -5 -25 7 -103 429 -3 15 -3 27 1 27 4 0
125 -29 269 -65z m-3888 -286 c39 -78 79 -147 90 -154 11 -8 139 -54 284 -104
144 -50 266 -93 270 -96 8 -4 -117 -666 -128 -676 -10 -11 -672 -136 -676
-128 -3 4 -46 125 -96 270 -50 145 -95 271 -100 281 -6 10 -74 50 -152 89 -78
39 -143 72 -144 73 -4 3 107 441 115 456 5 9 96 36 233 71 123 32 226 58 229
58 3 1 37 -63 75 -140z m4705 81 c113 -27 212 -54 220 -58 9 -5 36 -97 71
-238 32 -126 57 -229 56 -230 -1 -1 -66 -34 -144 -73 -78 -39 -146 -79 -152
-89 -5 -10 -50 -136 -100 -281 -50 -145 -93 -266 -96 -270 -4 -8 -666 117
-676 128 -11 10 -136 672 -128 676 4 3 126 46 270 96 145 50 273 96 284 104
11 7 51 76 90 154 51 104 73 140 85 136 8 -2 107 -27 220 -55z m-2340 -351
c85 -98 165 -192 178 -208 l22 -28 -182 -63 -183 -63 -170 58 c-93 32 -176 61
-183 65 -8 4 47 75 165 212 98 114 183 207 188 207 6 0 80 -81 165 -180z
m-1213 -256 c139 -49 253 -91 253 -95 0 -5 -190 -230 -235 -277 -13 -13 -347
-83 -375 -79 -13 3 -8 42 36 268 29 146 53 266 53 268 2 6 29 -3 268 -85z
m2418 -183 c43 -226 48 -265 35 -268 -28 -4 -362 66 -375 79 -45 47 -235 272
-235 277 0 9 490 181 509 179 11 -2 28 -74 66 -267z m-4056 -259 c39 -112 74
-213 77 -225 5 -20 -5 -23 -221 -64 -125 -24 -229 -42 -231 -39 -4 3 86 375
137 569 l9 37 80 -37 79 -37 70 -204z m5681 -40 c39 -156 69 -286 66 -288 -2
-3 -106 15 -231 39 -216 41 -226 44 -221 64 3 12 38 113 77 225 l70 204 77 36
c67 32 78 34 84 20 4 -9 39 -144 78 -300z m-3254 209 l259 -90 260 90 c143 50
265 90 272 90 7 0 94 -95 195 -210 152 -176 187 -212 217 -219 20 -5 147 -30
282 -56 l247 -47 47 -247 c26 -135 51 -262 56 -282 7 -30 43 -65 219 -217 115
-101 210 -189 210 -196 0 -7 -41 -130 -90 -272 l-90 -259 90 -260 c50 -143 90
-265 90 -272 0 -7 -95 -94 -210 -195 -176 -152 -212 -187 -219 -217 -5 -20
-30 -147 -56 -282 l-47 -247 -247 -47 c-135 -26 -262 -51 -282 -56 -30 -7 -65
-43 -217 -219 -101 -115 -189 -210 -196 -210 -7 0 -130 41 -272 90 l-259 90
-260 -90 c-143 -50 -265 -90 -272 -90 -7 0 -94 95 -195 210 -152 176 -187 212
-217 219 -20 5 -147 30 -282 56 l-247 47 -47 247 c-26 135 -51 262 -56 282 -7
30 -43 65 -219 217 -115 101 -210 188 -210 195 0 7 40 129 90 272 l90 260 -90
259 c-49 142 -90 265 -90 272 0 7 95 95 210 196 176 152 212 187 219 217 5 20
30 147 56 282 l47 247 247 47 c135 26 262 51 282 56 30 7 65 43 217 219 101
115 189 210 196 210 7 0 130 -41 272 -90z m-1510 -699 c-19 -95 -40 -179 -47
-186 -47 -45 -272 -235 -277 -235 -10 0 -185 510 -177 518 3 4 124 29 268 57
223 43 262 49 265 35 1 -8 -13 -93 -32 -189z m3992 112 c23 -3 45 -10 48 -14
6 -11 -168 -519 -178 -519 -5 0 -230 190 -277 235 -11 11 -81 332 -81 376 0
14 31 10 223 -28 122 -24 241 -46 265 -50z m-4629 -389 c62 -180 108 -330 103
-333 -5 -3 -120 -103 -256 -221 -137 -118 -251 -216 -255 -218 -10 -3 -461
387 -461 400 0 5 32 139 70 297 l71 287 282 56 c155 31 294 56 308 57 25 1 29
-9 138 -325z m5243 269 l297 -57 71 -286 c38 -158 70 -292 70 -297 0 -13 -451
-405 -461 -401 -4 2 -118 100 -255 218 -136 118 -251 218 -256 221 -12 8 212
659 226 659 6 0 145 -25 308 -57z m-4977 -1038 l58 -170 -63 -183 -63 -182
-28 22 c-97 78 -388 335 -388 343 0 6 93 90 207 188 137 118 208 173 212 165
4 -7 33 -90 65 -183z m4584 -5 c99 -85 180 -159 180 -165 0 -5 -93 -90 -207
-188 -137 -118 -208 -173 -212 -165 -4 7 -33 90 -65 183 l-58 170 63 183 63
182 28 -22 c16 -13 110 -93 208 -178z m-5586 -44 c112 -97 135 -122 125 -132
-80 -79 -324 -279 -329 -270 -3 6 -21 71 -39 145 l-33 135 28 115 c15 64 32
131 37 149 l9 33 32 -28 c18 -15 94 -82 170 -147z m6527 13 l33 -135 -33 -135
c-18 -73 -36 -139 -39 -145 -6 -11 -328 259 -334 279 -4 14 328 296 334 283 4
-6 21 -72 39 -147z m-5944 -519 c136 -118 251 -218 256 -221 8 -5 -204 -644
-218 -658 -3 -3 -141 22 -309 54 l-304 59 -71 287 c-38 158 -70 292 -70 297 0
13 451 403 461 400 4 -2 118 -100 255 -218z m5608 24 c124 -108 226 -201 226
-207 0 -5 -32 -139 -70 -297 l-71 -286 -304 -59 c-168 -32 -306 -57 -309 -54
-2 2 -54 149 -115 327 l-112 323 28 23 c15 13 132 114 258 225 127 110 233
200 236 201 3 0 108 -88 233 -196z m-5007 -545 c70 -61 134 -117 142 -124 13
-13 83 -347 79 -375 -3 -14 -42 -8 -265 35 -144 28 -265 53 -268 57 -8 8 167
518 177 518 4 0 64 -50 135 -111z m4146 -145 c49 -140 86 -258 82 -262 -3 -4
-124 -29 -268 -57 -223 -43 -262 -49 -265 -35 -4 28 66 362 79 375 47 45 272
235 277 235 4 0 47 -115 95 -256z m-4995 -410 c194 -37 203 -40 198 -60 -3
-12 -38 -113 -77 -225 l-70 -204 -79 -37 -80 -37 -9 37 c-24 91 -141 562 -141
568 0 4 12 4 28 1 15 -2 118 -22 230 -43z m5872 41 c0 -5 -120 -487 -141 -567
l-9 -37 -80 37 -79 37 -70 204 c-39 112 -74 213 -77 225 -5 20 5 23 208 63
219 42 248 47 248 38z m-4749 -264 c12 -11 136 -672 128 -677 -5 -2 -126 -45
-269 -94 -143 -49 -270 -94 -280 -100 -11 -6 -52 -75 -91 -153 -39 -78 -72
-143 -73 -144 -1 -1 -104 24 -230 56 -141 35 -233 62 -238 71 -8 15 -119 453
-115 456 1 1 66 34 144 73 78 39 146 79 152 89 5 10 50 136 100 281 50 145 93
266 96 270 4 8 666 -117 676 -128z m4139 -141 c51 -145 96 -272 101 -282 6
-10 74 -50 152 -89 78 -39 143 -72 144 -73 4 -3 -107 -441 -115 -456 -5 -9
-97 -36 -238 -71 -126 -32 -229 -57 -230 -56 -1 1 -34 66 -73 144 -39 78 -80
147 -91 153 -10 6 -137 51 -280 100 -143 49 -264 92 -269 94 -8 5 116 666 128
677 9 10 665 136 673 130 4 -3 48 -125 98 -271z m-3671 56 c95 -19 179 -40
186 -47 45 -47 235 -272 235 -277 0 -10 -508 -184 -519 -178 -4 3 -11 25 -14
48 -4 24 -26 143 -50 266 -38 191 -42 222 -28 222 9 0 94 -15 190 -34z m2594
-188 c-24 -123 -46 -242 -50 -266 -3 -23 -10 -45 -14 -48 -11 -6 -519 168
-519 178 0 5 191 230 235 277 12 12 308 77 366 80 l26 1 -44 -222z m-1191
-189 l178 -62 -22 -28 c-78 -97 -335 -388 -343 -388 -8 0 -266 291 -343 388
l-22 28 172 61 c95 33 179 60 187 61 8 1 94 -27 193 -60z m-577 -406 c121
-140 221 -258 223 -262 3 -10 -387 -461 -400 -461 -5 0 -139 32 -297 70 l-287
71 -59 304 c-32 168 -57 306 -54 309 6 6 632 224 644 224 6 0 109 -114 230
-255z m1328 146 c177 -61 324 -113 326 -115 3 -3 -22 -141 -54 -309 l-59 -304
-287 -71 c-158 -38 -292 -70 -297 -70 -13 0 -403 451 -400 461 4 8 441 517
446 518 2 1 149 -49 325 -110z m-2395 -425 c24 -124 42 -228 39 -230 -3 -4
-376 86 -569 137 l-38 10 38 77 c20 42 37 78 38 80 1 3 428 151 439 151 6 1
30 -101 53 -225z m3203 145 l204 -70 37 -79 37 -80 -37 -9 c-194 -51 -566
-141 -569 -137 -3 2 15 106 39 231 41 216 44 226 64 221 12 -3 113 -38 225
-77z m-1588 -499 c82 -94 130 -157 123 -161 -6 -4 -72 -21 -147 -39 l-135 -33
-135 33 c-73 18 -139 36 -145 39 -7 4 46 73 134 174 118 136 148 165 158 155
7 -7 73 -83 147 -168z"
                />
              </g>
            </symbol>
          </svg>
        </div>
        <div>
          <Mozaic />
        </div>
      </div>
    </>
  );
};

export default LogoIcon;
