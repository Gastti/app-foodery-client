[1mdiff --git a/src/pages/WelcomePage/WelcomePage.jsx b/src/pages/WelcomePage/WelcomePage.jsx[m
[1mindex 2fef705..d1c0998 100644[m
[1m--- a/src/pages/WelcomePage/WelcomePage.jsx[m
[1m+++ b/src/pages/WelcomePage/WelcomePage.jsx[m
[36m@@ -23,7 +23,6 @@[m [mexport default function WelcomePage() {[m
             navigate('/')[m
         }, 6000)[m
 [m
[31m-[m
         const timer = setInterval(() => {[m
             setTimeLeft(prevTimeLeft => prevTimeLeft - 1);[m
         }, 1000);[m
[36m@@ -37,7 +36,7 @@[m [mexport default function WelcomePage() {[m
             <Container[m
                 padding[m
                 primary[m
[31m-                substyle={{ height: 'calc(100vh - 328.39px)' }}[m
[32m+[m[32m                style={{ height: 'calc(100vh - 228.39px)' }}[m
                 flex='row'[m
                 justify='center'[m
                 align='center'[m
[1mdiff --git a/src/services/auth.jsx b/src/services/auth.jsx[m
[1mindex 6a09b9d..3b85043 100644[m
[1m--- a/src/services/auth.jsx[m
[1m+++ b/src/services/auth.jsx[m
[36m@@ -42,7 +42,10 @@[m [mfunction AuthProvider({ children }) {[m
 [m
             setTokenOnLocalStorage(data.token);[m
             setLoading(false);[m
[31m-            navigate('/welcome');[m
[32m+[m[32m            setError(false);[m
[32m+[m[32m            setTimeout(() => {[m
[32m+[m[32m                navigate('/welcome');[m
[32m+[m[32m            }, 1000);[m
         } catch (error) {[m
             console.error(error);[m
         }[m
