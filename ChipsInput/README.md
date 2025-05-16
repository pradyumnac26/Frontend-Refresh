💬 Chips Input
In this task, you are asked to create a Chips Input component that allows users to input a series of tags or keywords. The component will display these tags as "chips" (small labels), which users can add and remove dynamically.

✨ Features:
Input Field: Users can type text into an input field.

Add Chips: When the user presses the "Enter" key, the typed text will be added as a new chip (tag).

Empty or whitespace-only chips should not be added.

Remove Chips: Users can delete a chip by clicking the "X" button next to it.

Horizontal Display: The chips should be displayed in a horizontal list.

Persistence: The list of chips should be maintained even when the component re-renders.

📌 Important Points:
The input field should be of type text.

Button should be labeled "X" to delete chips.

If two chips have the same name, deleting one should NOT delete both.

Use onKeyDown event handler instead of onKeyPress, because onKeyPress is deprecated.
![image](https://github.com/user-attachments/assets/ad804279-2a66-42bf-bdf5-2dbf84fb99f1)
