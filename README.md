# Assignment 6
## Saida Khairova IT 2502 

### code structure 
- `index.html` is the page structure (sections, buttons, inputs).
- `style.css` is the styling.
- `script.js` is all the jQuery code.

### Task 0

**HTML** (index.html, at the bottom of the page). jQuery is loaded from a CDN first, then my own script:
<img width="840" height="57" alt="Screenshot 2026-11-03 at 00 27 26" src="https://github.com/user-attachments/assets/4aa11657-6d95-4e85-b274-bde365e482f9" />

**jQuery** (script.js):
<img width="453" height="180" alt="Screenshot 2026-11-03 at 00 32 10" src="https://github.com/user-attachments/assets/a28719b9-260a-4181-b08f-ecc3814f99da" />
- $(document).ready() waits until the whole page has loaded before running the code, so jQuery can find every element. The message in the console proves that jQuery loaded correctly. The order of the two script tags matters: jQuery must come before `script.js`.


### Task 1
<img width="635" height="426" alt="Screenshot 2026-11-03 at 00 33 17" src="https://github.com/user-attachments/assets/6578ac0e-90ee-4e12-8d71-5964fcac3e74" />

- The three selector types are used: tag (h2), ID (#headline) and class (.intro).
- .css() changes the style of the selected elements. Passing an object changes several properties at once.
- .html() replaces content and understands HTML tags (the <em> makes the name italic). .text() replaces content as plain text.
- The Light and Dark buttons run .css() on the body, sections and headings to switch the theme.


### Task 2
<img width="652" height="81" alt="Screenshot 2026-11-03 at 00 35 58" src="https://github.com/user-attachments/assets/96ae9a13-1776-451a-aad8-928d0faf847b" />


- The status message and the fun facts list are selected together with a comma. .hide() hides them, .show() shows them, and .toggle() switches between the two.


### Task 3
<img width="691" height="98" alt="Screenshot 2026-11-03 at 00 37 17" src="https://github.com/user-attachments/assets/1f500722-85ee-40aa-919e-c5db5dadedb8" />
- The same idea as Task 2, but the images change opacity gradually instead of disappearing instantly. `.fadeOut()` fades the images out, `.fadeIn()` brings them back, and `.fadeToggle()` switches between them. `.gallery img` selects every image inside the gallery.

### Task 4
<img width="691" height="98" alt="Screenshot 2026-11-03 at 00 38 30" src="https://github.com/user-attachments/assets/8b1e5bfd-cfeb-4dfa-bc96-ea4997fc655a" />
<img width="280" height="284" alt="Screenshot 2026-11-03 at 00 38 09" src="https://github.com/user-attachments/assets/cbdb8f97-d08e-4a0f-ac80-a819399d7c0f" />

- Clicking a heading opens or closes only the panel under it. $(this) is the heading that was clicked, and .next(".panel") finds the panel right after it.
- .slideDown() and .slideUp() open and close the panel with a sliding motion, and .slideToggle() switches between them.
- The three extra buttons control all panels at once.

### Task 5
<img width="734" height="465" alt="Screenshot 2026-11-03 at 00 39 40" src="https://github.com/user-attachments/assets/70fc72b3-ae5c-47bf-ac69-43d1d2ea87a2" />

- getSkill() reads the input with .val() and removes extra spaces with .trim(). If the result is empty, it shows an error message and returns null, so **empty skills are never added**. Otherwise it clears the input and returns the skill.
- .append() adds the new skill to the **end** of the list, and .prepend() adds it to the **start**.
- .remove() deletes the last list item (li:last).
- $("<div>").text(s).html() turns special characters like < into safe text, so a visitor can't insert HTML into the page.

### Task 6
<img width="738" height="73" alt="Screenshot 2026-11-03 at 00 41 03" src="https://github.com/user-attachments/assets/3b47486b-708b-4e3e-bb7d-8c3f5f0b4f41" />

- .attr("href", ...) changes the link's destination, so the link now goes to LinkedIn. .text() updates the visible link text to match.

### Task 7
<img width="783" height="65" alt="Screenshot 2026-11-03 at 00 41 42" src="https://github.com/user-attachments/assets/f8f356a4-ca2c-4bf2-95dd-13d087cd43dc" />
- The input event fires on every keystroke. $(this).val() reads what is currently typed in the field, and .text() writes it into the <span> below the form, so the output updates live as the user types.

### Task 8
- Each bar stores its target width in a data-level attribute
<img width="691" height="357" alt="Screenshot 2026-11-03 at 00 43 18" src="https://github.com/user-attachments/assets/8064a152-2409-4cce-8b52-f62ae666d9a9" />

<img width="502" height="180" alt="Screenshot 2026-11-03 at 00 42 57" src="https://github.com/user-attachments/assets/1fa3a5a5-529d-4f99-8a75-02f4e7781576" />

- Bars start with zero width:
- <img width="278" height="318" alt="Screenshot 2026-11-03 at 00 44 20" src="https://github.com/user-attachments/assets/3d7d3f91-0a6e-4747-a21c-59f8aecdb7ee" />

- The bars start at width: 0
- On click, .each() goes through every bar. $(this).data("level") reads that bar's own target (90, 75, 60, 40), so each bar ends at a different width.
- .animate({ width: ... }, 1000)grows the bar smoothly over 1 second.
- The expanded variable remembers the current state. On the next click the target becomes 0, so the bars shrink back, and expanded = !expanded flips the state for the following click.
