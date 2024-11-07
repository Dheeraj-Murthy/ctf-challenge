# Cyber Heist CTF Solution
---
## Step 1: Decoding the Hidden Image Message
1. **Extract Hidden Text**:
   - Open the image in a hex editor or use tools like **Stegsolve** or **Steghide** to look for hidden information. you can also write a python script to get the text.
   - The message is hidden in the red pixels as binary code. Convert the binary into readable text.
2. **Interpret the Message**:
   - The decoded message should hint that the username is `bateman` and that SQL injection will reveal the flag.
---
## Step 2: SQL Injection Attack

1. **Identify the SQL Injection Point**:
   - Go to the login or input field where the `role` and `expertise` parameters are submitted.
   - The SQL injection vulnerability is in the input handling of these fields.
2. **Craft the Injection Payload**:
   - Use the following payload in the `role` field to bypass authentication:
     ```
     bateman' OR '1'='1' -- 
     ```
   - This SQL injection will grant access to the system by bypassing the authentication check.
3. **Retrieve the Flag**:
   - Once logged in, navigate to the section where the flag is displayed.
   - Capture the flag from the results displayed on the page.
---




