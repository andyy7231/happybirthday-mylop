(function () {
  window.Components = window.Components || {};

  window.Components.timeline = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-timeline";
      div.style.opacity = "0"; // Hide section container initially

      const title = section.title || "Our Story";
      const milestones = section.milestones || [];

      div.innerHTML = `
        <h2 class="timeline-title">${title}</h2>
        <div class="timeline-container">
          <div class="timeline-line"></div>
          ${milestones.map((m, i) => {
            const imgHtml = m.img ? `
              <div class="timeline-img-wrapper">
                <img src="${m.img}" alt="${m.title}" class="timeline-img" onerror="this.parentNode.style.display='none';" />
              </div>
            ` : "";

            return `
              <div class="timeline-item timeline-item-${i}">
                <div class="timeline-badge"></div>
                <div class="timeline-content">
                  <h4>${m.title}</h4>
                  <p>${m.desc}</p>
                  ${imgHtml}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      `;

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const container = el.querySelector(".timeline-container");
      const items = el.querySelectorAll(".timeline-item");
      const title = el.querySelector(".timeline-title");

      // Initial setup
      gsap.set(items, { opacity: 0, y: 30 });
      gsap.set(container, { scrollTop: 0 });

      // Fade in the section container at the start of its animation
      tl.to(el, { opacity: 1, duration: 0.8, ease: "power2.out" });

      // Title entry
      tl.fromTo(title, 
        { opacity: 0, y: -15 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );

      // Animate each timeline item in sequence
      items.forEach((item, index) => {
        tl.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          onStart: () => {
            if (index > 0 && container) {
              const offsetTop = item.offsetTop;
              const halfHeight = container.clientHeight / 2;
              gsap.to(container, {
                scrollTop: offsetTop - halfHeight + (item.clientHeight / 2),
                duration: 0.8,
                ease: "power2.out"
              });
            }
          }
        }, "-=0.2");

        // Keep item visible for some reading time
        tl.to({}, { duration: 2.2 });
      });

      // Exit timeline
      tl.to(el, { duration: 0.8, opacity: 0, y: -30 }, "+=1");
    },
  };
})();
