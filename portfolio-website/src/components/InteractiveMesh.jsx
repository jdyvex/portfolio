import { useEffect, useRef } from "react";

const InteractiveMesh = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.closest(".about-section");
    const context = canvas?.getContext("2d");

    if (!canvas || !section || !context) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0, y: 0, active: false, force: 1 };
    let nodes = [];
    let columns = 0;
    let rows = 0;
    let width = 0;
    let height = 0;
    let accent = "#8297ff";
    let frameId;
    let isVisible = true;

    const readAccent = () => {
      accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#8297ff";
    };

    const buildMesh = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const spacing = rect.width < 600 ? 54 : rect.width < 1100 ? 68 : 82;

      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      columns = Math.ceil(width / spacing) + 2;
      rows = Math.ceil(height / spacing) + 2;
      nodes = [];

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const offset = row % 2 === 0 ? 0 : spacing * 0.5;
          const baseX = column * spacing - spacing + offset;
          const baseY = row * spacing - spacing * 0.5;
          const phase = ((column * 41 + row * 67) % 360) * (Math.PI / 180);

          nodes.push({
            baseX,
            baseY,
            x: baseX,
            y: baseY,
            velocityX: 0,
            velocityY: 0,
            angle: phase,
            spin: 0,
            size: 3 + ((column + row) % 3),
          });
        }
      }
    };

    const drawConnection = (from, to) => {
      const stretch = Math.hypot(to.x - from.x, to.y - from.y);
      const restLength = Math.hypot(to.baseX - from.baseX, to.baseY - from.baseY);
      const alpha = Math.max(0.018, 0.12 - Math.abs(stretch - restLength) / 280);

      context.globalAlpha = alpha;
      context.beginPath();
      context.moveTo(from.x, from.y);
      context.lineTo(to.x, to.y);
      context.stroke();
    };

    const drawMesh = () => {
      context.clearRect(0, 0, width, height);
      context.strokeStyle = accent;
      context.fillStyle = accent;
      context.lineWidth = 1;

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const index = row * columns + column;
          const node = nodes[index];

          if (column < columns - 1) drawConnection(node, nodes[index + 1]);
          if (row < rows - 1) {
            drawConnection(node, nodes[index + columns]);
            if (column < columns - 1 && (row + column) % 2 === 0) {
              drawConnection(node, nodes[index + columns + 1]);
            }
          }
        }
      }

      nodes.forEach((node, index) => {
        context.save();
        context.translate(node.x, node.y);
        context.rotate(node.angle);
        context.globalAlpha = index % 5 === 0 ? 0.42 : 0.25;
        context.beginPath();
        context.moveTo(0, -node.size);
        context.lineTo(node.size * 0.9, node.size * 0.8);
        context.lineTo(-node.size * 0.9, node.size * 0.8);
        context.closePath();

        if (index % 5 === 0) context.fill();
        else context.stroke();

        context.restore();
      });

      context.globalAlpha = 1;
    };

    const updateMesh = () => {
      const radius = Math.min(210, Math.max(118, width * 0.13));

      nodes.forEach((node) => {
        if (pointer.active) {
          const deltaX = node.x - pointer.x;
          const deltaY = node.y - pointer.y;
          const distance = Math.max(1, Math.hypot(deltaX, deltaY));

          if (distance < radius) {
            const proximity = 1 - distance / radius;
            const push = proximity * proximity * pointer.force * 2.3;
            node.velocityX += (deltaX / distance) * push;
            node.velocityY += (deltaY / distance) * push;
            node.spin += ((deltaX + deltaY) / distance) * proximity * 0.006;
          }
        }

        node.velocityX += (node.baseX - node.x) * 0.028;
        node.velocityY += (node.baseY - node.y) * 0.028;
        node.velocityX *= 0.88;
        node.velocityY *= 0.88;
        node.x += node.velocityX;
        node.y += node.velocityY;
        node.angle += node.spin;
        node.spin *= 0.9;
      });

      pointer.force += (1 - pointer.force) * 0.08;
    };

    const animate = () => {
      if (!isVisible) return;
      updateMesh();
      drawMesh();
      frameId = window.requestAnimationFrame(animate);
    };

    const setPointer = (event) => {
      const rect = section.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
      section.style.setProperty("--field-x", `${((pointer.x / rect.width) * 100).toFixed(2)}%`);
      section.style.setProperty("--field-y", `${((pointer.y / rect.height) * 100).toFixed(2)}%`);
    };

    const handlePointerMove = (event) => {
      if (reducedMotion.matches) return;
      setPointer(event);
    };

    const handlePointerDown = (event) => {
      if (reducedMotion.matches) return;
      setPointer(event);
      pointer.force = 3.2;
    };

    const handlePointerEnd = (event) => {
      if (event.pointerType === "touch") pointer.active = false;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      section.style.setProperty("--field-x", "50%");
      section.style.setProperty("--field-y", "50%");
    };

    const restartAnimation = () => {
      window.cancelAnimationFrame(frameId);
      if (reducedMotion.matches || !isVisible) drawMesh();
      else frameId = window.requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      buildMesh();
      drawMesh();
    });
    const themeObserver = new MutationObserver(() => {
      readAccent();
      drawMesh();
    });
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      restartAnimation();
    }, { rootMargin: "120px" });

    readAccent();
    buildMesh();
    resizeObserver.observe(section);
    intersectionObserver.observe(section);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    section.addEventListener("pointermove", handlePointerMove, { passive: true });
    section.addEventListener("pointerdown", handlePointerDown, { passive: true });
    section.addEventListener("pointerup", handlePointerEnd, { passive: true });
    section.addEventListener("pointercancel", handlePointerEnd, { passive: true });
    section.addEventListener("pointerleave", handlePointerLeave);
    reducedMotion.addEventListener("change", restartAnimation);
    restartAnimation();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      intersectionObserver.disconnect();
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerdown", handlePointerDown);
      section.removeEventListener("pointerup", handlePointerEnd);
      section.removeEventListener("pointercancel", handlePointerEnd);
      section.removeEventListener("pointerleave", handlePointerLeave);
      reducedMotion.removeEventListener("change", restartAnimation);
    };
  }, []);

  return <canvas ref={canvasRef} className="about-interactive-mesh" aria-hidden="true" />;
};

export default InteractiveMesh;
