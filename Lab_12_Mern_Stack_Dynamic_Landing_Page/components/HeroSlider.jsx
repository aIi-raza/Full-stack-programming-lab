"use client";
 
import { useState, useEffect, useCallback } from "react";
import { useCart } from "@/context/CartContext";
 
// ─── Embedded assets (no /public/images folder needed) ───────────────────────
 
const SLIDER_ARROW_B64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAqCAYAAADoMebhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDY2Njc3M0I3OUFGMTFFNDhGQkI4RDFDQURENTRBNUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDY2Njc3M0M3OUFGMTFFNDhGQkI4RDFDQURENTRBNUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NjY2NzczOTc5QUYxMUU0OEZCQjhEMUNBREQ1NEE1QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NjY2NzczQTc5QUYxMUU0OEZCQjhEMUNBREQ1NEE1QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjWqH+QAAAVISURBVHja5JlfaBxFHMd/Ozs7e7e5/DGmaaERlfiiKH0oNm+CFn0Solas2KKpiopGkxgVlCCCoPg/0CCCD30oUqogPqhUfCmCxWuulKJQayya6INtojHNZZPb293xO9e9Iwln79/uNb0b+DJ3t7szv/nsb36/mTlNTvSJdMYblkQPk6ReIopR8xRb02iKadpBS7BxDhAf8S037TO6byAWbyNNF01DQrqO5dvz25y/ft6Wnjt7I5eSdpk9t5DGOK7CP9xM08DQIN3qoNi12yk9e3aPgpHKnvvlDtF1PTVrcf+eRoSgSe5J+ZTzx8ljcnm+S2zqxTQxmgqEZ/9Ly9Mn5rOefEzL/bB/x058+cbxpG52XUei8xr4kNb4McNzKT11zPN8eXeHxY8URoysMuRLOe64kgCGzKt7SLR1NzSUlbkZyizMvtge19/NxxBaBeQAqgFAoQyguApKx2YSLR0NByWzcJ4yi/880v5Cai/GTcVgqLz6HZS7qqAUPCXRTka8tSGYOPYiZdILKYzltoSpL6/OLrQOyFZUSWhr/rc1UOJxMkTsioWSdRxasZfOYeQ72kZTM3mvKAojANIXeMiaFVgBii9JcE7C0OlKYoJASfaK4+BF3t46mjoWjPXSMIKbBlAdKHpNQfEuSmg+GUwS2+BU1Hoy7erKo58AiI9XjbM0jODGcVRDl+og6/k5KFxm4UYuMfI3ZuZQ1mnGBEA8u26Mhc+8RBuj0M3QzqLLWaAUnBFmC6aORrZrkO5nSMgM6dLdOJmDWeQy4yiC5Uip5TmV8I4uVD9AvWUFqNz08Ylhj2P4y8T9y7vXcfQWcnhi2tC1W2PDk7NFxlf4zEpuZgaTc6juhZbK6RydUovQyTDj5IgOso2rKMsuz6lAlsUVCBs29RcDsb6wchoFkB9JnXeQ2s+UVzigWIAizBhlAWXJ6KSsHq9f5mAGrRhtUmfaPoA4Vc4zrNzGAeRzVK9XahRnCgqjmGmSK9ppUWyG61qgGl36kRojm3eqvt+0RiY/Lfc5VmE/r0FfVGMg3hDFDUYtJvKNaKO06M7N5yigZNAu+vsK/Y1V8lxFMOAdapo8Av1UraEMKShWgNJKabMbxidybzMUELyVPG6dhjfuCeylqDxDAbkQBNT5WozOQ0lgCmHjA0/ZVDMU5Wmubl2IcdYPOxcqtqmq47LB5K+odqs4VfPRG6CYXEHR10GpbPoEmcPDumc3f+74VFUvqOpBDCa/RfVSWPNcjX0tlIsxpYLMQULXXhFDx49U7a01DWAw+T6qg2EGvzyUFkwfDzFlmbfnBlsqcwDEIXN48u2apm4I9j8JTYadEVRMUdmHm1ZusCod+5q+5h71XWUOrGlOAODjNb+IUPL6RF9PAGRLFOsGP9gle5D6rGEziH1yLt5gdXkeILbDS/+s0vZQPYMCQ3apgB4FjFzmUVPH1ClhcrJMI1dj4+UAxH3VgohimuSBqMOSp6NeZquYouAEyWYQ/X4fWtur3SSksl8ZWYftx4fQM6F6YARGPg8djRiEOpIcCX06RrFzhh6Afo8IxAx0fxTxiUVksDo7uAeyQ27XDtqdjcJoFqErqzOEgUrOQEplQehR6GRUBrOI5/Zn0BshtfUWdDhKY6OGocqr0Jc1tvE1NBa1ofWAof472AudrvL5M9BDYeyQNwIMVdTZQn9Q1+O5DQ1DFXXG8GAFb9gLPOJMvQysJwxV1FnDy2XeOxbECmpUGKq8Ax0qcc/hIHtQo8NQRZ09JP/nWipYT8hmgaFWkndB70G/QZlg+f4BdGcEK9eyyn8CDADS+tLMPkD/QgAAAABJRU5ErkJggg==";
 
const CONTROLS_B64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAA/CAYAAAAfQM0aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRjQ5NEM3RDI5QTkxMUUyOTc1NENCMzI4N0QwNDNCOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRjQ5NEM3RTI5QTkxMUUyOTc1NENCMzI4N0QwNDNCOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJGNDk0QzdCMjlBOTExRTI5NzU0Q0IzMjg3RDA0M0I5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJGNDk0QzdDMjlBOTExRTI5NzU0Q0IzMjg3RDA0M0I5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WeGRxAAAB2hJREFUeNrUXFts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";
 
const CART_B64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAATCAYAAAB/TkaLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjQ0MUFGMzg3NkQ3MTFFNDgxMzJFNzQ1MkFEMzQ1OTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjQ0MUFGMzk3NkQ3MTFFNDgxMzJFNzQ1MkFEMzQ1OTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNDQxQUYzNjc2RDcxMUU0ODEzMkU3NDUyQUQzNDU5NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNDQxQUYzNzc2RDcxMUU0ODEzMkU3NDUyQUQzNDU5NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq0Jvo0AAAKhSURBVHjapJTJaxRREKreTozdRSCSmKAokhDEDSWCp9w0J8FLBPXkxVP+AFEPgx5yckOQQA6KYMhBVBDFgyBGcAuCQYmoyISICyYuiYZE4nT5e29aJzPpHkR7qKl6W9VXVd97aocyr8W0XtSGROWuiJxFBqTqZyVTK5dUQib343AbwwaJpF1UGxm3Mf4p//iFSB+O+3xwlQf8d6M3E7JfIp2N5C++4E82yl9gN7BGGO91afwP0pnfuGh0UaLgAEHqGNcS4At6LvI1Dl8AwRg6iuemkUnke1yyvNrhTHnhRZpB+QT9FLlD+rvRl9myA/udd2S6kaAD6BbOElSzzDsQn9i3JExo4SvkFrKU6XO+gSKdlMaheYSjQRzuxL6A7kBui9lyfBAA9ph2qR0JksqySwrBJZzeB0kD+jkImtEjrH3DXok9iN7A+D12BtuB+IBelcm1JjZkCGnzNQ4MRugpDixifBO5ij2FPu3nAutl/QX2OAAeYq8OUxo4BS96pIAzs0bGC0CwlYNN2J+x12DXo1tI19lZ7Do4Ttp2L6xCHdK3HOvDHDqP1MbNe4ndWlx3P3uMvRDZxN71IM2HVa7iWyJ3gaAdm3SV6I5mCl04HMkPXG7x9XWZiK5jfZ7jeVqjpJiB7YGzPRx+4ycM6qjBU89dx9E88hEZ8yUrNvJKFaTSwTU9iZPryDEQ5T3z1BHcIXfN0qjyfUm6Ub8foX04PIGzgzTsOPSqeKAq+qAz1oiTgtTVRyY8VQpwViQ7G08Zxuni9ZU5riTJTtUcL7dTw2uMRuN7HpRhK4GNcO0aNJ85guiZMDG+yFpkGZtGJYiOYvf6x6WUqMbiTi+mVN3oJmZ43C2X1qhJNkxAfEogz/xzmP7VsNc9QCuQfseEXwIMAJOL4tVt/PX2AAAAAElFTkSuQmCC";
 
// ─── Slide data ────────────────────────────────────────────────────────────────
// The original professor's site uses 3 static slides.
// We dynamically map the first product to slide 1; slides 2 & 3 use the same
// text/price but different images from the professor's original assets.
// Because /public/images/ doesn't exist yet we use Unsplash fallbacks for the
// slide background photos — replace them with the real PNG paths once you copy
// the images across (instructions at bottom of this file).
 
const SLIDE_IMAGES = [
  "/images/slider-1.png", // copy from professor's zip → public/images/
  "/images/slider-2.png",
  "/images/slider-3.png",
];
const SLIDE_BG = "/images/slider-bg.png"; // copy from professor's zip → public/images/
 
// ─── Styles injected once into <head> ─────────────────────────────────────────
const SLIDER_CSS = `
.hero-slider-section {
  background-color: #f4f4f4;
  float: left;
  width: 100%;
  min-height: 500px;
  position: relative;

}
.hero-inner-top {
  background-image: url('/images/slider-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;        
  background-position: center;       
  width: 100%;
  min-height: 500px;
  position: relative;
  overflow: hidden;
}
.hero-inner-slider {
  margin: auto;
  max-width: 1100px;
  position: relative;
  overflow: hidden;
  min-height: 500px;
}
 
/* ── BxSlider viewport ── */
.bx-viewport {
  position: relative;
  overflow: hidden;
  min-height: 500px;
}
.bx-slide-track {
  display: flex;
  transition: transform 0.6s ease;
}
.bx-slide {
  flex-shrink: 0;
  width: 100%;
  position: relative;
}
.bx-slide img.slide-img {
  display: block;
  max-width: 100%;
}
 
/* ── Slide info panel ── */
.slider-info {
  background-image: url('${SLIDER_ARROW_B64}');
  background-position: top center;
  background-repeat: no-repeat;
  padding: 40px 0 0;
  position: absolute;
  right: 15%;
  top: 60px;
  width: 24%;
  text-align: center;
}
.slider-info p {
  color: #3b3b3b;
  float: left;
  font-size: 14px;
  margin: 0;
  width: 100%;
  line-height: 1.5;
}
.slider-info .price {
  color: #ff7904;
  float: right;
  font-size: 48px;
  font-family: Century, Georgia, serif;
  text-align: right;
  width: 100%;
  margin-top: 8px;
}
.slider-info .price > span {
  color: #3b3b3b;
  float: right;
  font-size: 18px;
  margin: 0;
  width: auto;
}
.slider-info .our-price {
  color: #000;
  font-family: Century, Georgia, serif;
}
.slider-info .add-to {
  font-size: 14px;
  font-family: Corbel, sans-serif;
  font-weight: normal;
  text-decoration: none;
  border-radius: 50px;
  border: 1px solid #a4a4a4;
  padding: 8px 30px;
  cursor: pointer;
  color: #000;
  float: right;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  background: linear-gradient(to right, #d1d1d1 0%, #fefefe 57%, #dbdbdb 100%);
  box-shadow: inset 1px 1px 0px 0px #BEE2F9;
}
.slider-info .add-to:hover {
  background: linear-gradient(to right, #c5c5c5 0%, #f0f0f0 57%, #cfcfcf 100%);
}
.slider-info .cart-icon {
  display: inline-block !important;
  width: 21px;
  height: 19px;
  vertical-align: middle;
}
 
/* ── bxSlider-style navigation arrows ── */
.bx-controls-direction {
  position: absolute;
  bottom: 36px;
  right: 24px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}
.bx-prev,
.bx-next {
  display: block;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
  text-indent: -9999px;
  overflow: hidden;
}
.bx-prev {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAMAAAB2iTwcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0QxNTJBNEQzRTc0MTFFNDg2REJDRjIxQjlBNDY0NUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0QxNTJBNEUzRTc0MTFFNDg2REJDRjIxQjlBNDY0NUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRDE1MkE0QjNFNzQxMUU0ODZEQkNGMjFCOUE0NjQ1QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRDE1MkE0QzNFNzQxMUU0ODZEQkNGMjFCOUE0NjQ1QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk5dR60AAAAGUExURf///////1V89WwAAAACdFJOU/8A5bcwSgAAACRJREFUeNpiYAQBBgYIyQAhGSAkA4REA1BBmBKYBph2IA0QYAAFYwAfjAlkrwAAAABJRU5ErkJggg==');
}
.bx-next {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAMAAAB2iTwcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjZCMERGRDAzRTc0MTFFNEExMzU5Njk0MDkwNTBGMzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjZCMERGRDEzRTc0MTFFNEExMzU5Njk0MDkwNTBGMzgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNkIwREZDRTNFNzQxMUU0QTEzNTk2OTQwOTA1MEYzOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNkIwREZDRjNFNzQxMUU0QTEzNTk2OTQwOTA1MEYzOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjQo1FMAAAAGUExURf///////1V89WwAAAACdFJOU/8A5bcwSgAAACNJREFUeNpiYGAEAQYGBijFAKUYoBQDlEIFyEqQtYMNAwgwAAUdAB9NkShZAAAAAElFTkSuQmCC');
}

/* hide pager dots (as original does) */
.bx-pager { display: none !important; }
`;
 
// ─── Component ────────────────────────────────────────────────────────────────
 
export default function HeroSlider({ product }) {
  const cart = useCart();
  const [current, setCurrent] = useState(0);
  const TOTAL = 3;
 
  // Build the 3 slides: first slide uses the product prop, rest use same text
  const desc =
    product?.description ||
    "This is Photoshop\u2019s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.";
 
  const slides = [0, 1, 2].map((i) => ({
    imgSrc: SLIDE_IMAGES[i],
    desc,
    price: product?.price ?? 129,
    cents: ".99",
    id: product?._id || product?.sku,
  }));
 
  // Auto-advance every 5 s (matches bxSlider default behaviour)
  useEffect(() => {
    const t = setInterval(
      () => setCurrent((c) => (c + 1) % TOTAL),
      5000
    );
    return () => clearInterval(t);
  }, []);
 
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + TOTAL) % TOTAL),
    []
  );
  const next = useCallback(() => setCurrent((c) => (c + 1) % TOTAL), []);
 
  // Inject CSS once
  useEffect(() => {
    if (document.getElementById("hero-slider-css")) return;
    const el = document.createElement("style");
    el.id = "hero-slider-css";
    el.textContent = SLIDER_CSS;
    document.head.appendChild(el);
  }, []);
 
  return (
    <div className="hero-slider-section" style={{ clear: "both" }}>
      <div className="hero-inner-top">
        <div className="hero-inner-slider">
          {/* ── Slides ── */}
          <div className="bx-viewport">
            <div
              className="bx-slide-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <div className="bx-slide" key={i}>
                  {/* Slide image (left-dominant) */}
                  <img
                    className="slide-img"
                    src={slide.imgSrc}
                    alt={`Slide ${i + 1}`}
                    onError={(e) => {
                      // fallback to unsplash if local image not yet copied
                      e.target.onerror = null;
                      e.target.src =
                        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=610&h=390&fit=crop";
                    }}
                  />
 
                  {/* Info panel — absolutely positioned to the right */}
                  <div className="slider-info">
                    <p>{slide.desc}</p>
 
                    <p className="price">
                      £{Math.floor(slide.price)}
                      <span>
                        {slide.cents}{" "}
                        <span className="our-price">OUR PRICE </span>
                      </span>
                    </p>
 
                    <button
                      className="add-to"
                      onClick={() => cart?.addToCart(slide.id)}
                    >
                      ADD TO{" "}
                      <img
                        className="cart-icon"
                        src={CART_B64}
                        alt="cart"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
 
          {/* ── Navigation arrows (bxSlider style, bottom-right) ── */}
          <div className="bx-controls-direction">
            <button className="bx-prev" onClick={prev}>
              prev
            </button>
            <button className="bx-next" onClick={next}>
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}