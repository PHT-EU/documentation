import{_ as s,o as n,c as a,f as e}from"./app.a2f06a94.js";const F=JSON.parse('{"title":"Harbor","description":"","frontmatter":{},"headers":[{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]}],"relativePath":"guide/deployment/central-harbor.md"}'),l={name:"guide/deployment/central-harbor.md"},o=e(`<h1 id="harbor" tabindex="-1">Harbor <a class="header-anchor" href="#harbor" aria-hidden="true">#</a></h1><p>The open source software <a href="https://goharbor.io/" target="_blank" rel="noreferrer">harbor</a> is a registry for docker images. It is used to store and distribute the docker images of the PHT-meDIC infrastructure, as well as the PHT-meDIC train images. The harbor instance runs behind by the same reverse proxy used by the central application.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a></h2><ul><li><a href="https://docs.docker.com/engine/install/" target="_blank" rel="noreferrer">Docker</a></li><li><a href="https://docs.docker.com/compose/install/" target="_blank" rel="noreferrer">Docker Compose</a></li><li>CPU: Minimum 2, Recommended 4</li><li>RAM: Minimum 4GB, Recommended 8GB</li><li>Disk: Minimum 40GB, Recommended 160GB</li><li>HTTPS: A valid <code>[HARBOR_SSL_CRT]</code> + <code>[HARBOR_SSL_KEY]</code> for the <code>[HARBOR_DOMAIN]</code> name</li><li>DNS: A valid DNS entry for the <code>[HARBOR_DOMAIN]</code> name</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><p>Follow the instructions in the <a href="https://goharbor.io/docs/2.4.0/install-config/" target="_blank" rel="noreferrer">harbor documentation</a> to install harbor.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><p>The following shows an example configuration file for harbor.</p><div class="warning custom-block"><p class="custom-block-title">Info</p><p>Don&#39;t forget to replace the placeholders with the actual values:</p><ul><li><code>[HARBOR_DOMAIN]</code>: Domain name (e.g. <a href="http://harbor.example.com" target="_blank" rel="noreferrer">harbor.example.com</a>)</li><li><code>[HARBOR_STORAGE]</code>: Storage path (e.g. /data/harbor)</li><li><code>[HARBOR_SSL_CRT]</code>: Path to certificate file (.crt)</li><li><code>[HARBOR_SSL_KEY]</code>: Path to certificate key file (.key)</li></ul></div><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki has-diff"><code><span class="line"><span style="color:#676E95;"># Configuration file of Harbor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># The IP address or hostname to access admin UI and registry service.</span></span>
<span class="line"><span style="color:#676E95;"># DO NOT use localhost or 127.0.0.1, because Harbor needs to be accessed by external clients.</span></span>
<span class="line"><span style="color:#F07178;">hostname</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">HARBOR_DOMAIN</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># http related config</span></span>
<span class="line"><span style="color:#F07178;">http</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># port for http, default is 80. If https enabled, this port will redirect to https port</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># https related config</span></span>
<span class="line"><span style="color:#F07178;">https</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># https port for harbor, default is 443</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">443</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># The path of cert and key files for nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">certificate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">HARBOR_SSL_CRT</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">private_key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">HARBOR_SSL_KEY</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># # Uncomment following will enable tls communication between all harbor components</span></span>
<span class="line"><span style="color:#676E95;"># internal_tls:</span></span>
<span class="line"><span style="color:#676E95;">#   # set enabled to true means internal tls is enabled</span></span>
<span class="line"><span style="color:#676E95;">#   enabled: true</span></span>
<span class="line"><span style="color:#676E95;">#   # put your cert and key files on dir</span></span>
<span class="line"><span style="color:#676E95;">#   dir: /etc/harbor/tls/internal</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Uncomment external_url if you want to enable external proxy</span></span>
<span class="line"><span style="color:#676E95;"># And when it enabled the hostname will no longer used</span></span>
<span class="line"><span style="color:#F07178;">external_url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://[HARBOR_DOMAIN]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># The initial password of Harbor admin</span></span>
<span class="line"><span style="color:#676E95;"># It only works in first time to install harbor</span></span>
<span class="line"><span style="color:#676E95;"># Remember Change the admin password from UI after launching Harbor.</span></span>
<span class="line"><span style="color:#F07178;">harbor_admin_password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Harbor12345</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Harbor DB configuration</span></span>
<span class="line"><span style="color:#F07178;">database</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># The password for the root user of Harbor DB. Change this before any production use.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root123</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># The maximum number of connections in the idle connection pool. If it &lt;=0, no idle connections are retained.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">max_idle_conns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># The maximum number of open connections to the database. If it &lt;= 0, then there is no limit on the number of open connections.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># Note: the default number of connections is 1024 for postgres of harbor.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">max_open_conns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">900</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># The default data volume</span></span>
<span class="line"><span style="color:#F07178;">data_volume</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">HARBOR_STORAGE</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Harbor Storage settings by default is using /data dir on local filesystem</span></span>
<span class="line"><span style="color:#676E95;"># Uncomment storage_service setting If you want to using external storage</span></span>
<span class="line"><span style="color:#676E95;"># storage_service:</span></span>
<span class="line"><span style="color:#676E95;">#   # ca_bundle is the path to the custom root ca certificate, which will be injected into the truststore</span></span>
<span class="line"><span style="color:#676E95;">#   # of registry&#39;s and chart repository&#39;s containers.  This is usually needed when the user hosts a internal storage with self signed certificate.</span></span>
<span class="line"><span style="color:#676E95;">#   ca_bundle:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#   # storage backend, default is filesystem, options include filesystem, azure, gcs, s3, swift and oss</span></span>
<span class="line"><span style="color:#676E95;">#   # for more info about this configuration please refer https://docs.docker.com/registry/configuration/</span></span>
<span class="line"><span style="color:#676E95;">#   filesystem:</span></span>
<span class="line"><span style="color:#676E95;">#     maxthreads: 100</span></span>
<span class="line"><span style="color:#676E95;">#   # set disable to true when you want to disable registry redirect</span></span>
<span class="line"><span style="color:#676E95;">#   redirect:</span></span>
<span class="line"><span style="color:#676E95;">#     disabled: false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Trivy configuration</span></span>
<span class="line"><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#676E95;"># Trivy DB contains vulnerability information from NVD, Red Hat, and many other upstream vulnerability databases.</span></span>
<span class="line"><span style="color:#676E95;"># It is downloaded by Trivy from the GitHub release page https://github.com/aquasecurity/trivy-db/releases and cached</span></span>
<span class="line"><span style="color:#676E95;"># in the local file system. In addition, the database contains the update timestamp so Trivy can detect whether it</span></span>
<span class="line"><span style="color:#676E95;"># should download a newer version from the Internet or use the cached one. Currently, the database is updated every</span></span>
<span class="line"><span style="color:#676E95;"># 12 hours and published as a new release to GitHub.</span></span>
<span class="line"><span style="color:#F07178;">trivy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># ignoreUnfixed The flag to display only fixed vulnerabilities</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ignore_unfixed</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># skipUpdate The flag to enable or disable Trivy DB downloads from GitHub</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># You might want to enable this flag in test or CI/CD environments to avoid GitHub rate limiting issues.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># If the flag is enabled you have to download the \`trivy-offline.tar.gz\` archive manually, extract \`trivy.db\` and</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># \`metadata.json\` files and mount them in the \`/home/scanner/.cache/trivy/db\` path.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">skip_update</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># The offline_scan option prevents Trivy from sending API requests to identify dependencies.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># Scanning JAR files and pom.xml may require Internet access for better detection, but this option tries to avoid it.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># For example, the offline mode will not try to resolve transitive dependencies in pom.xml when the dependency doesn&#39;t</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># exist in the local repositories. It means a number of detected vulnerabilities might be fewer in offline mode.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># It would work if all the dependencies are in local.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># This option doesn’t affect DB download. You need to specify &quot;skip-update&quot; as well as &quot;offline-scan&quot; in an air-gapped environment.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">offline_scan</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># insecure The flag to skip verifying registry certificate</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">insecure</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># github_token The GitHub access token to download Trivy DB</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># Anonymous downloads from GitHub are subject to the limit of 60 requests per hour. Normally such rate limit is enough</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># for production operations. If, for any reason, it&#39;s not enough, you could increase the rate limit to 5000</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># requests per hour by specifying the GitHub access token. For more details on GitHub rate limiting please consult</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># https://developer.github.com/v3/#rate-limiting</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># You can create a GitHub token by following the instructions in</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># github_token: xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">jobservice</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># Maximum number of job workers in job service</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">max_job_workers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">notification</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># Maximum retry count for webhook job</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">webhook_job_max_retry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">chart</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># Change the value of absolute_url to enabled can enable absolute url in chart</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">absolute_url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">disabled</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Log configurations</span></span>
<span class="line"><span style="color:#F07178;">log</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># options are debug, info, warning, error, fatal</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">level</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">info</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># configs for logs in local storage</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">local</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># Log files are rotated log_rotate_count times before being removed. If count is 0, old versions are removed rather than rotated.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rotate_count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># Log files are rotated only if they grow bigger than log_rotate_size bytes. If size is followed by k, the size is assumed to be in kilobytes.</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># If the M is used, the size is in megabytes, and if G is used, the size is in gigabytes. So size 100, size 100k, size 100M and size 100G</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># are all valid.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rotate_size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">200M</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># The directory on your host that store log</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">location</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/log/harbor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># Uncomment following lines to enable external syslog endpoint.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># external_endpoint:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   # protocol used to transmit log to external endpoint, options is tcp or udp</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   protocol: tcp</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   # The host of external endpoint</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   host: localhost</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   # Port of external endpoint</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   port: 5140</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#This attribute is for migrator to detect the version of the .cfg file, DO NOT MODIFY!</span></span>
<span class="line"><span style="color:#F07178;">_version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2.4.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Uncomment external_database if using external database.</span></span>
<span class="line"><span style="color:#676E95;"># external_database:</span></span>
<span class="line"><span style="color:#676E95;">#   harbor:</span></span>
<span class="line"><span style="color:#676E95;">#     host: harbor_db_host</span></span>
<span class="line"><span style="color:#676E95;">#     port: harbor_db_port</span></span>
<span class="line"><span style="color:#676E95;">#     db_name: harbor_db_name</span></span>
<span class="line"><span style="color:#676E95;">#     username: harbor_db_username</span></span>
<span class="line"><span style="color:#676E95;">#     password: harbor_db_password</span></span>
<span class="line"><span style="color:#676E95;">#     ssl_mode: disable</span></span>
<span class="line"><span style="color:#676E95;">#     max_idle_conns: 2</span></span>
<span class="line"><span style="color:#676E95;">#     max_open_conns: 0</span></span>
<span class="line"><span style="color:#676E95;">#   notary_signer:</span></span>
<span class="line"><span style="color:#676E95;">#     host: notary_signer_db_host</span></span>
<span class="line"><span style="color:#676E95;">#     port: notary_signer_db_port</span></span>
<span class="line"><span style="color:#676E95;">#     db_name: notary_signer_db_name</span></span>
<span class="line"><span style="color:#676E95;">#     username: notary_signer_db_username</span></span>
<span class="line"><span style="color:#676E95;">#     password: notary_signer_db_password</span></span>
<span class="line"><span style="color:#676E95;">#     ssl_mode: disable</span></span>
<span class="line"><span style="color:#676E95;">#   notary_server:</span></span>
<span class="line"><span style="color:#676E95;">#     host: notary_server_db_host</span></span>
<span class="line"><span style="color:#676E95;">#     port: notary_server_db_port</span></span>
<span class="line"><span style="color:#676E95;">#     db_name: notary_server_db_name</span></span>
<span class="line"><span style="color:#676E95;">#     username: notary_server_db_username</span></span>
<span class="line"><span style="color:#676E95;">#     password: notary_server_db_password</span></span>
<span class="line"><span style="color:#676E95;">#     ssl_mode: disable</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Uncomment external_redis if using external Redis server</span></span>
<span class="line"><span style="color:#676E95;"># external_redis:</span></span>
<span class="line"><span style="color:#676E95;">#   # support redis, redis+sentinel</span></span>
<span class="line"><span style="color:#676E95;">#   # host for redis: &lt;host_redis&gt;:&lt;port_redis&gt;</span></span>
<span class="line"><span style="color:#676E95;">#   # host for redis+sentinel:</span></span>
<span class="line"><span style="color:#676E95;">#   #  &lt;host_sentinel1&gt;:&lt;port_sentinel1&gt;,&lt;host_sentinel2&gt;:&lt;port_sentinel2&gt;,&lt;host_sentinel3&gt;:&lt;port_sentinel3&gt;</span></span>
<span class="line"><span style="color:#676E95;">#   host: redis:6379</span></span>
<span class="line"><span style="color:#676E95;">#   password:</span></span>
<span class="line"><span style="color:#676E95;">#   # sentinel_master_set must be set to support redis+sentinel</span></span>
<span class="line"><span style="color:#676E95;">#   #sentinel_master_set:</span></span>
<span class="line"><span style="color:#676E95;">#   # db_index 0 is for core, it&#39;s unchangeable</span></span>
<span class="line"><span style="color:#676E95;">#   registry_db_index: 1</span></span>
<span class="line"><span style="color:#676E95;">#   jobservice_db_index: 2</span></span>
<span class="line"><span style="color:#676E95;">#   chartmuseum_db_index: 3</span></span>
<span class="line"><span style="color:#676E95;">#   trivy_db_index: 5</span></span>
<span class="line"><span style="color:#676E95;">#   idle_timeout_seconds: 30</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Uncomment uaa for trusting the certificate of uaa instance that is hosted via self-signed cert.</span></span>
<span class="line"><span style="color:#676E95;"># uaa:</span></span>
<span class="line"><span style="color:#676E95;">#   ca_file: /path/to/ca</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Global proxy</span></span>
<span class="line"><span style="color:#676E95;"># Config http proxy for components, e.g. http://my.proxy.com:3128</span></span>
<span class="line"><span style="color:#676E95;"># Components doesn&#39;t need to connect to each others via http proxy.</span></span>
<span class="line"><span style="color:#676E95;"># Remove component from \`components\` array if want disable proxy</span></span>
<span class="line"><span style="color:#676E95;"># for it. If you want use proxy for replication, MUST enable proxy</span></span>
<span class="line"><span style="color:#676E95;"># for core and jobservice, and set \`http_proxy\` and \`https_proxy\`.</span></span>
<span class="line"><span style="color:#676E95;"># Add domain to the \`no_proxy\` field, when you want disable proxy</span></span>
<span class="line"><span style="color:#676E95;"># for some special registry.</span></span>
<span class="line"><span style="color:#F07178;">proxy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">http_proxy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">https_proxy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">no_proxy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">core</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jobservice</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">trivy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># metric:</span></span>
<span class="line"><span style="color:#676E95;">#   enabled: false</span></span>
<span class="line"><span style="color:#676E95;">#   port: 9090</span></span>
<span class="line"><span style="color:#676E95;">#   path: /metrics</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Trace related config</span></span>
<span class="line"><span style="color:#676E95;"># only can enable one trace provider(jaeger or otel) at the same time,</span></span>
<span class="line"><span style="color:#676E95;"># and when using jaeger as provider, can only enable it with agent mode or collector mode.</span></span>
<span class="line"><span style="color:#676E95;"># if using jaeger collector mode, uncomment endpoint and uncomment username, password if needed</span></span>
<span class="line"><span style="color:#676E95;"># if using jaeger agetn mode uncomment agent_host and agent_port</span></span>
<span class="line"><span style="color:#676E95;"># trace:</span></span>
<span class="line"><span style="color:#676E95;">#   enabled: true</span></span>
<span class="line"><span style="color:#676E95;">#   # set sample_rate to 1 if you wanna sampling 100% of trace data; set 0.5 if you wanna sampling 50% of trace data, and so forth</span></span>
<span class="line"><span style="color:#676E95;">#   sample_rate: 1</span></span>
<span class="line"><span style="color:#676E95;">#   # # namespace used to differenciate different harbor services</span></span>
<span class="line"><span style="color:#676E95;">#   # namespace:</span></span>
<span class="line"><span style="color:#676E95;">#   # # attributes is a key value dict contains user defined attributes used to initialize trace provider</span></span>
<span class="line"><span style="color:#676E95;">#   # attributes:</span></span>
<span class="line"><span style="color:#676E95;">#   #   application: harbor</span></span>
<span class="line"><span style="color:#676E95;">#   # # jaeger should be 1.26 or newer.</span></span>
<span class="line"><span style="color:#676E95;">#   # jaeger:</span></span>
<span class="line"><span style="color:#676E95;">#   #   endpoint: http://hostname:14268/api/traces</span></span>
<span class="line"><span style="color:#676E95;">#   #   username:</span></span>
<span class="line"><span style="color:#676E95;">#   #   password:</span></span>
<span class="line"><span style="color:#676E95;">#   #   agent_host: hostname</span></span>
<span class="line"><span style="color:#676E95;">#   #   # export trace data by jaeger.thrift in compact mode</span></span>
<span class="line"><span style="color:#676E95;">#   #   agent_port: 6831</span></span>
<span class="line"><span style="color:#676E95;">#   # otel:</span></span>
<span class="line"><span style="color:#676E95;">#   #   endpoint: hostname:4318</span></span>
<span class="line"><span style="color:#676E95;">#   #   url_path: /v1/traces</span></span>
<span class="line"><span style="color:#676E95;">#   #   compression: false</span></span>
<span class="line"><span style="color:#676E95;">#   #   insecure: true</span></span>
<span class="line"><span style="color:#676E95;">#   #   timeout: 10s</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,10),p=[o];function t(r,c,i,y,d,D){return n(),a("div",null,p)}const u=s(l,[["render",t]]);export{F as __pageData,u as default};
