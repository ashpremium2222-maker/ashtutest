/* ==========================================================================
   ASHTU PORTFOLIO WEBSITE - CLIENT LOGIC
   Includes: Terminal, form validation, theme toggle
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    /* ----------------------------------------------------------------------
       1. THEME TOGGLER (Light/Dark Mode)
       ---------------------------------------------------------------------- */
    const themeToggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;
    const themeIcon = themeToggleBtn.querySelector("i");
    
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("portfolio-theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const setPrefTheme = (theme) => {
        htmlElement.setAttribute("data-theme", theme);
        localStorage.setItem("portfolio-theme", theme);
        
        if (theme === "light") {
            themeIcon.className = "fa-solid fa-sun";
        } else {
            themeIcon.className = "fa-solid fa-moon";
        }
    };
    
    if (savedTheme) {
        setPrefTheme(savedTheme);
    } else {
        setPrefTheme(systemPrefersDark ? "dark" : "light");
    }
    
    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        setPrefTheme(currentTheme === "dark" ? "light" : "dark");
    });

    /* ----------------------------------------------------------------------
       2. MOBILE NAVIGATION DRAWER
       ---------------------------------------------------------------------- */
    const mobileNavToggle = document.getElementById("mobile-nav-toggle");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-links a");
    const menuIcon = mobileNavToggle.querySelector("i");
    
    mobileNavToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
        
        if (navbar.classList.contains("active")) {
            menuIcon.className = "fa-solid fa-xmark";
        } else {
            menuIcon.className = "fa-solid fa-bars";
        }
    });
    
    // Close nav on clicking links
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            menuIcon.className = "fa-solid fa-bars";
            
            // Set active class link
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
    
    // Scroll Spy: Update active link on scroll
    window.addEventListener("scroll", () => {
        const header = document.getElementById("main-header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        const sections = document.querySelectorAll("section");
        let currentSectionId = "hero";
        
        sections.forEach(sec => {
            const secTop = sec.offsetTop - 120;
            if (window.scrollY >= secTop) {
                currentSectionId = sec.getAttribute("id");
            }
        });
        
        navLinks.forEach(l => {
            l.classList.remove("active");
            if (l.getAttribute("href") === `#${currentSectionId}`) {
                l.classList.add("active");
            }
        });
    });

    /* ----------------------------------------------------------------------
       3. SKILL BARS PROGRESS LOADER (Scroll Activated)
       ---------------------------------------------------------------------- */
    const skillBars = document.querySelectorAll(".skill-bar");
    const skillsSection = document.getElementById("skills");
    
    const fillSkills = () => {
        skillBars.forEach(bar => {
            const finalWidth = bar.getAttribute("data-width");
            bar.style.width = finalWidth;
        });
    };
    
    if (skillsSection && "IntersectionObserver" in window) {
        const skillsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    fillSkills();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        
        skillsObserver.observe(skillsSection);
    } else {
        // Fallback if IntersectionObserver is not supported
        setTimeout(fillSkills, 1500);
    }

    /* ----------------------------------------------------------------------
       4. INTERACTIVE PLAYGROUND (Terminal Console)
       ---------------------------------------------------------------------- */
    const terminalInput = document.getElementById("terminal-input");
    const terminalOutput = document.getElementById("terminal-output");
    const terminalDate = document.getElementById("terminal-date");
    const clearTerminalBtn = document.getElementById("clear-terminal-btn");
    
    // Set date string
    if (terminalDate) {
        terminalDate.textContent = new Date().toLocaleString();
    }
    
    const addTerminalLine = (text, type = "default") => {
        const p = document.createElement("p");
        p.className = `terminal-text ${type}`;
        p.innerHTML = text;
        terminalOutput.appendChild(p);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    };
    
    const runTerminalCommand = (rawCommand) => {
        const command = rawCommand.trim().toLowerCase();
        
        // Echo command
        addTerminalLine(`guest@ashtu.dev:~# ${rawCommand}`, "text-dim");
        
        if (command === "") return;
        
        switch (command) {
            case "help":
                addTerminalLine("Available Commands:", "text-indigo");
                addTerminalLine("  <strong>about</strong>     - Tell you a bit about myself");
                addTerminalLine("  <strong>skills</strong>    - List my technical stack");
                addTerminalLine("  <strong>contact</strong>   - How to reach out");
                addTerminalLine("  <strong>theme</strong>     - Switch layout design theme (theme light / theme dark)");
                addTerminalLine("  <strong>secret</strong>    - Uncover an hidden easter egg");
                addTerminalLine("  <strong>clear</strong>     - Clear the CLI window output");
                break;
                
            case "about":
                addTerminalLine("Ashtu is an interactive UI Engineer and Frontend web developer who focuses on turning code concepts into highly responsive and premium layouts.", "text-teal");
                break;
                
            case "skills":
                addTerminalLine("Technical Stack Summary:", "text-indigo");
                addTerminalLine("• Languages: HTML5, CSS3, JavaScript (ES6+), SQL");
                addTerminalLine("• Layouts: Flexbox, CSS Grid, Responsive Design");
                addTerminalLine("• Design tools: Figma, Glassmorphism, CSS Custom Keyframes");
                break;
                

            case "contact":
                addTerminalLine("You can contact me at: <a href='mailto:ashtuconnect@gmail.com' style='color:var(--accent-indigo); text-decoration:underline;'>ashtuconnect@gmail.com</a>", "text-teal");
                addTerminalLine("Find me on GitHub at: <a href='#' style='color:var(--accent-indigo); text-decoration:underline;'>github.com/ashtu</a>");
                break;
                
            case "theme light":
                setPrefTheme("light");
                addTerminalLine("Theme updated to Light Mode.", "text-teal");
                break;
                
            case "theme dark":
                setPrefTheme("dark");
                addTerminalLine("Theme updated to Dark Mode.", "text-teal");
                break;
                
            case "theme":
                addTerminalLine("Usage: theme [light / dark]", "text-dim");
                break;
                
            case "secret":
                addTerminalLine("✨ EASTER EGG UNLOCKED! ✨", "text-purple");
                addTerminalLine("<em>'True code elegance is not when there is nothing more to add, but when there is nothing left to take away.'</em> - Ashtu", "text-purple");
                break;
                
            case "clear":
                terminalOutput.innerHTML = "";
                break;
                
            default:
                addTerminalLine(`bash: command not found: ${command}. Type 'help' to see list of valid query parameters.`, "text-dim");
                break;
        }
    };
    
    if (terminalInput) {
        terminalInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const cmd = terminalInput.value;
                runTerminalCommand(cmd);
                terminalInput.value = "";
            }
        });
    }
    
    if (clearTerminalBtn) {
        clearTerminalBtn.addEventListener("click", () => {
            terminalOutput.innerHTML = "";
            addTerminalLine("Console log cleared. Ready.", "text-dim");
        });
    }

    /* ----------------------------------------------------------------------
       5. CONTACT FORM VALIDATION & SUBMISSION MODAL
       ---------------------------------------------------------------------- */
    const contactForm = document.getElementById("portfolio-contact-form");
    const successModal = document.getElementById("success-modal");
    const closeModalBtn = document.getElementById("close-modal-btn");
    
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };
    
    const checkField = (input, errorSpan, validationFn = null) => {
        const group = input.parentElement;
        let isValid = true;
        
        if (input.value.trim() === "") {
            isValid = false;
        } else if (validationFn && !validationFn(input.value.trim())) {
            isValid = false;
        }
        
        if (!isValid) {
            group.classList.add("has-error");
        } else {
            group.classList.remove("has-error");
        }
        
        return isValid;
    };
    
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById("contact-name");
            const emailInput = document.getElementById("contact-email");
            const subjectInput = document.getElementById("contact-subject");
            const messageInput = document.getElementById("contact-message");
            
            const isNameValid = checkField(nameInput, document.getElementById("name-error"));
            const isEmailValid = checkField(emailInput, document.getElementById("email-error"), validateEmail);
            const isSubjectValid = checkField(subjectInput, document.getElementById("subject-error"));
            const isMessageValid = checkField(messageInput, document.getElementById("message-error"));
            
            // Add live inputs listener after first submit click
            [nameInput, subjectInput, messageInput].forEach(inp => {
                inp.addEventListener("input", () => {
                    checkField(inp, inp.nextElementSibling);
                });
            });
            
            emailInput.addEventListener("input", () => {
                checkField(emailInput, document.getElementById("email-error"), validateEmail);
            });
            
            if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
                // Form is fully validated, display success modal
                successModal.classList.add("active");
                contactForm.reset();
                
                // Clear any error states lingering
                document.querySelectorAll(".form-group").forEach(grp => {
                    grp.classList.remove("has-error");
                });
            }
        });
    }
    
    if (closeModalBtn && successModal) {
        closeModalBtn.addEventListener("click", () => {
            successModal.classList.remove("active");
        });
        
        // Clicking overlay closes modal
        successModal.addEventListener("click", (e) => {
            if (e.target === successModal) {
                successModal.classList.remove("active");
            }
        });
    }

    /* ----------------------------------------------------------------------
       6. CONTACT ME MODAL (Telegram / WhatsApp / Gmail)
       ---------------------------------------------------------------------- */
    const contactBtn = document.getElementById("btn-contact-me");
    const contactModal = document.getElementById("contact-modal");
    const closeContactModal = document.getElementById("close-contact-modal");
    
    if (contactBtn && contactModal) {
        contactBtn.addEventListener("click", () => {
            contactModal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    }
    
    if (closeContactModal && contactModal) {
        closeContactModal.addEventListener("click", () => {
            contactModal.classList.remove("active");
            document.body.style.overflow = "";
        });
        
        // Close on overlay click
        contactModal.addEventListener("click", (e) => {
            if (e.target === contactModal) {
                contactModal.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
        
        // Close on Escape key press
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && contactModal.classList.contains("active")) {
                contactModal.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    }
});
