import{_ as e,o as t,c as a,N as o}from"./chunks/framework.e2c189b6.js";const s="/images/offline_tool_images/settings.png",i="/images/offline_tool_images/encryption.png",r="/images/offline_tool_images/rsa_encryption.png",n="/images/offline_tool_images/Signature.png",l="/images/offline_tool_images/download_results.png",p="/images/offline_tool_images/load_results.png",w=JSON.parse('{"title":"Desktop App","description":"","frontmatter":{},"headers":[],"relativePath":"guide/user/central/desktop_app.md"}'),h={name:"guide/user/central/desktop_app.md"},c=o('<h1 id="desktop-app" tabindex="-1">Desktop App <a class="header-anchor" href="#desktop-app" aria-label="Permalink to &quot;Desktop App&quot;">​</a></h1><p>The PHT Desktop App is the offline tool of the User Interface. It can sign hashes locally during the submission process of a train. After successful execution, it is used to decrypt downloaded results and key management.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Download the newest release for your operating system from <a href="https://github.com/PHT-Medic/desktop-app/releases" target="_blank" rel="noreferrer">GitHub</a> and install the software on your local machine.</p><h2 id="create-keys" tabindex="-1">Create Keys <a class="header-anchor" href="#create-keys" aria-label="Permalink to &quot;Create Keys&quot;">​</a></h2><p>This is an example to create an <em>RSA-key-pair</em>. The same steps are requiered for creating a <em>homomorphic key-pair</em>.</p><ol><li>Start the application.</li><li>From the Homepage click on <strong>Settings</strong> on the left hand side.</li></ol><p><a href="/images/offline_tool_images/settings.png"><img src="'+s+'" alt="Offline Tool Start"></a></p><ol start="3"><li>Click on the <strong>KeyPair</strong>-button of the RSA box.</li></ol><p><a href="/images/offline_tool_images/encryption.png"><img src="'+i+'" alt="Offline Tool KeyPairs"></a></p><ol start="4"><li>Specify the directory where the keys should be saved.</li><li>Specify the filename of the private and the public key on the right side.</li><li>Select a passphrase for your private key. (If you press enter, an empty passphrase will be used)</li><li>Click on the <strong>Generate</strong>-button.</li></ol><p><a href="/images/offline_tool_images/rsa_encryption.png"><img src="'+r+'" alt="Offline Tool RSA Encryption"></a></p><h3 id="alternative-approach" tabindex="-1">Alternative approach <a class="header-anchor" href="#alternative-approach" aria-label="Permalink to &quot;Alternative approach&quot;">​</a></h3><p>Generate a new key using <a href="https://www.openssl.org/" target="_blank" rel="noreferrer">open-ssl</a>:</p><ol><li>Open a command-line terminal</li><li>Create and go to your specific folder where you want to store the new key-pair</li><li>Type: <code>openssl genrsa -passout pass:start123 -out private.pem 2048</code> for creating the private key</li><li>Type: <code>openssl rsa -in private.pem -passin pass:start123 -outform PEM -pubout -out public.pem</code> for creating the assoziated public key.</li></ol><h2 id="sign-hash" tabindex="-1">Sign Hash <a class="header-anchor" href="#sign-hash" aria-label="Permalink to &quot;Sign Hash&quot;">​</a></h2><p>To perform the signature on a hash value it is necessary that the application knows your keypair (private and public key). (See <em>Create Keys</em> above).</p><ol><li>In the Menu click on <strong>Signature</strong>.</li><li>In the <strong>Hash</strong> textfield you should paste the generated HashKey from step 2.6 in <a href="./user_interface.html">User Guide -&gt; User interface</a>.</li><li>Click on <strong>Sign</strong>.</li><li>Copy the signed hash from the <strong>Signature (read only)</strong> textfield and proceed step 2.6 in <a href="./user_interface.html">User Guide -&gt; User interface</a>. <a href="/images/offline_tool_images/Signature.png"><img src="'+n+'" alt="Offline Tool Signature"></a></li></ol><h2 id="decrypt-results" tabindex="-1">Decrypt results <a class="header-anchor" href="#decrypt-results" aria-label="Permalink to &quot;Decrypt results&quot;">​</a></h2><ol><li><p>After executing a training in the UI, you can download the results to your local machine. <a href="/images/offline_tool_images/download_results.png"><img src="'+l+'" alt="Offline Tool Download Results"></a></p></li><li><p>Open the Desktop App -&gt; Load your keys to the Desktop App via Settings -&gt; Click on <strong>results</strong> on the menu.</p><p>You will be directed to an overview where you can click on <strong>Select Result-File(.tar)</strong> button. Chose the downloaded results-file from the UI and press load. <a href="/images/offline_tool_images/load_results.png"><img src="'+p+'" alt="Offline Tool Load Results"></a></p></li><li><p>A new view appears where you can chose which files you want to save.</p><p>By clicking on the <strong>x</strong>-buttons, you can delete those files from the working space (you do not delete them from the results_file.tar, only a deletion from the Desktop App!).</p><p>By clicking on the <strong>save</strong>-button you start downloading the remaining files. A new folder will be placed in the same folder where you have selected the result-File.tar.</p></li></ol>',20),g=[c];function d(f,u,m,_,y,k){return t(),a("div",null,g)}const S=e(h,[["render",d]]);export{w as __pageData,S as default};
