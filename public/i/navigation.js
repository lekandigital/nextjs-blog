// Sidebar Navigation Functions
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const hamburger = document.querySelector('.hamburger-btn');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close sidebar when clicking overlay
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.sidebar-overlay');
    if (overlay) {
        overlay.addEventListener('click', toggleSidebar);
    }
    
    // Set active navigation based on current page
    setActiveNavigation();
});

function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.sidebar nav a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'overview.html')) {
            link.classList.add('active');
        }
    });
}

// Table of Contents Dropdown Functions
function toggleDropdown() {
     // This function will only have a visible effect on screens narrower than 1024px
    if (window.innerWidth < 1024) {
        const dropdown = document.getElementById('dropdown-content');
        const arrow = document.getElementById('arrow');
        
        dropdown.classList.toggle('open');
        arrow.classList.toggle('open');
    }
}

// Initialize dropdown state on page load for mobile.
// On wide screens, the list is always visible via CSS.
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth >= 1024) {
        const dropdownContent = document.getElementById('dropdown-content');
        if (dropdownContent) {
            dropdownContent.classList.add('open');
        }
    }
    
    // Initialize active section highlighting
    initActiveSection();
});

// Enhanced Active Section Highlighting System for Flat TOC
function initActiveSection() {
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.table-of-contents a[href^="#"]');

    if (sections.length === 0 || navLinks.length === 0) {
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -70% 0px', // Trigger when section is in the upper 30% of the viewport
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        let topSectionId = null;

        // Find the topmost section currently visible in the viewport
        const visibleSections = Array.from(sections).filter(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.top < window.innerHeight;
        });

        if (visibleSections.length > 0) {
            // Sort by top position to find the one closest to the top of the viewport
            visibleSections.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
            topSectionId = visibleSections[0].id;
        } else if (window.scrollY <= 100 && sections.length > 0) {
            // If at the very top of the page, activate the first link
            topSectionId = sections[0].id;
        }


        // Update active classes on navigation links
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === `#${topSectionId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

function updateHierarchicalTocHighlighting(activeSectionId, activeSubsectionId, mainNavLinks, subNavLinks) {
    // This function is no longer needed with the flattened structure.
    // Its body is cleared to prevent any lingering side effects.
}

// Enhanced smooth scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    const tocLinks = document.querySelectorAll('.table-of-contents a[href^="#"]');
    
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // For main section links, ensure subsections are expanded
                if (this.closest('.table-of-contents > ul > li')) {
                    const parentLi = this.closest('li');
                    if (parentLi && !this.closest('.toc-subsections')) {
                        // This is a main section link, expand its subsections
                        parentLi.classList.add('section-active');
                        this.classList.add('active');
                    }
                }
            }
        });
    });
});
