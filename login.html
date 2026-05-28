<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Secure administrative authentication terminal for Mwamini Trading platform.">
    <meta name="robots" content="noindex, nofollow">
    <title>Secure Admin Terminal | Mwamini</title>
    
    <link rel="stylesheet" href="style.css">
    
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    
    <style>
        /* * Component: Login Container 
         * Handles the central authentication box layout and elevation.
         */
        .login-container { 
            max-width: 400px; 
            margin: 10vh auto; 
            padding: 2.5rem 2rem; 
            background: var(--bg-surface); 
            border-radius: 12px; 
            border: 1px solid var(--border-color); 
            box-shadow: 0 10px 25px rgba(0,0,0,0.1); 
        }

        /* * Component: Input Group 
         * Standardized spacing for form fields.
         */
        .input-group { 
            position: relative; 
            margin-bottom: 1.5rem; 
        }

        .input-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            font-size: 14px;
            color: var(--text-main);
        }

        /* * Component: Password Visibility Toggle 
         */
        .password-toggle { 
            position: absolute; 
            right: 12px; 
            top: 38px; 
            cursor: pointer; 
            font-size: 12px; 
            font-weight: 600; 
            color: var(--accent); 
            user-select: none; 
            padding: 4px;
            transition: color 0.2s;
        }

        .password-toggle:hover {
            color: var(--accent-hover);
        }

        /* * Component: Button States 
         */
        button:disabled { 
            opacity: 0.7; 
            cursor: not-allowed; 
            transform: none !important;
            box-shadow: none !important;
        }

        /* Dynamic Error Message Block */
        #error-msg {
            margin-top: 1rem; 
            text-align: center; 
            font-size: 14px; 
            color: var(--danger);
            min-height: 20px;
        }
    </style>
</head>
<body>

    <div class="login-container">
        
        <h2 style="margin-bottom: 1.5rem; text-align: center; color: var(--text-main);">
            System Authentication
        </h2>
        
        <form id="login-form">
            
            <div class="input-group">
                <label for="admin-email">Administrative Email</label>
                <input 
                    type="email" 
                    id="admin-email" 
                    class="search-input" 
                    style="width: 100%;" 
                    required 
                    placeholder="admin@mwamini.com"
                    autocomplete="email"
                >
            </div>
            
            <div class="input-group">
                <label for="admin-password">Security Key</label>
                <input 
                    type="password" 
                    id="admin-password" 
                    class="search-input" 
                    style="width: 100%; padding-right: 3rem;" 
                    required 
                    placeholder="••••••••"
                    autocomplete="current-password"
                >
                <span class="password-toggle" id="toggle-text" onclick="togglePassword()">Show</span>
            </div>
            
            <button type="submit" id="login-btn" class="btn btn-primary" style="width: 100%; padding: 0.85rem;">
                Authorize Access
            </button>
            
            <p id="error-msg"></p>
            
        </form>
    </div>

    <script src="supabase-config.js"></script>
    <script>
        // DOM Element Caching
        const loginForm = document.getElementById("login-form");
        const btn = document.getElementById("login-btn");
        const errorMsg = document.getElementById("error-msg");

        /**
         * Toggles the visibility of the password input field.
         * Updates the UI text indicator accordingly.
         */
        function togglePassword() {
            const passInput = document.getElementById("admin-password");
            const toggleText = document.getElementById("toggle-text");
            
            if (passInput.type === "password") {
                passInput.type = "text";
                toggleText.innerText = "Hide";
            } else {
                passInput.type = "password";
                toggleText.innerText = "Show";
            }
        }

        /**
         * Primary Authentication Event Listener
         * Intercepts form submission, manages UI state, and authenticates via Supabase.
         */
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            
            // Extract and sanitize input values
            const email = document.getElementById("admin-email").value.trim();
            const password = document.getElementById("admin-password").value;

            // Prevent double-submissions and indicate processing state
            btn.disabled = true;
            btn.innerText = "Verifying Credentials...";
            errorMsg.innerText = "";
            
            try {
                // Dispatch authentication payload to Supabase backend
                const { data, error } = await window.supabase.auth.signInWithPassword({
                    email: email,
                    password: password
                });
                
                // Throw explicit errors to trigger the catch block
                if (error) {
                    throw error;
                }
                
                // On success, redirect to the secured admin mainframe
                window.location.replace("admin.html");
                
            } catch (err) {
                // Render error state cleanly back to the user
                errorMsg.innerText = "Access Denied: " + err.message;
                
                // Restore button state
                btn.disabled = false;
                btn.innerText = "Authorize Access";
            }
        });
    </script>
</body>
</html>
