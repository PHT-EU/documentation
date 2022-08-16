import{_ as e,o as t,c as a,f as r}from"./app.bca6134f.js";const b=JSON.parse('{"title":"Components","description":"","frontmatter":{},"headers":[{"level":3,"title":"Global","slug":"global"},{"level":3,"title":"Central","slug":"central"},{"level":3,"title":"Local/Station","slug":"local-station"},{"level":2,"title":"Third Party Services","slug":"third-party-services"},{"level":3,"title":"Central","slug":"central-1"},{"level":3,"title":"Local/Station","slug":"local-station-1"},{"level":2,"title":"Credits","slug":"credits"}],"relativePath":"guide/components.md"}'),n={name:"guide/components.md"},i=r('<h1 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-hidden="true">#</a></h1><p>Multiple git repositories contain the components of the PHT. These can be roughly separated into the following categories:</p><ul><li>global</li><li>central</li><li>local/station</li></ul><p>All <em>public</em> repositories can be found on <a href="https://github.com/PHT-Medic" target="_blank" rel="noreferrer">GitHub</a>.</p><h3 id="global" tabindex="-1">Global <a class="header-anchor" href="#global" aria-hidden="true">#</a></h3><p>Global components/services are neither used exclusive on central nor local/station side.</p><table><thead><tr><th style="text-align:center;">Service</th><th style="text-align:center;">Repository</th><th style="text-align:center;">Programing Language</th><th style="text-align:left;">Lead</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>Train Container Library</strong></td><td style="text-align:center;"><a href="https://github.com/PHT-Medic/train-container-library.git" target="_blank" rel="noreferrer">Train-Container-Library</a></td><td style="text-align:center;">Python</td><td style="text-align:left;"><a href="https://github.com/migraf" target="_blank" rel="noreferrer">migraf</a></td></tr></tbody></table><h3 id="central" tabindex="-1">Central <a class="header-anchor" href="#central" aria-hidden="true">#</a></h3><p>Central components/services (Central UI, Train building, Train Routing, Result Extraction, API, etc.) are individual packages within one monorepo.</p><table><thead><tr><th style="text-align:center;">Service</th><th style="text-align:center;">Repository</th><th style="text-align:center;">Programing Language</th><th style="text-align:left;">Lead</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>Central</strong></td><td style="text-align:center;"><a href="https://github.com/PHT-Medic/central" target="_blank" rel="noreferrer">Central</a></td><td style="text-align:center;">JavaScript/TypeScript</td><td style="text-align:left;"><a href="https://github.com/tada5hi" target="_blank" rel="noreferrer">tada5hi</a></td></tr></tbody></table><h3 id="local-station" tabindex="-1">Local/Station <a class="header-anchor" href="#local-station" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Service</th><th style="text-align:center;">Repository</th><th style="text-align:left;">Programing Language</th><th style="text-align:left;">Lead</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>Station</strong></td><td style="text-align:center;"><a href="https://github.com/PHT-Medic/station" target="_blank" rel="noreferrer">Station</a></td><td style="text-align:left;">Python</td><td style="text-align:left;"><a href="https://github.com/migraf" target="_blank" rel="noreferrer">migraf</a></td></tr><tr><td style="text-align:center;"><strong>Desktop App</strong></td><td style="text-align:center;"><a href="https://github.com/PHT-Medic/desktop-app" target="_blank" rel="noreferrer">Desktop-App</a></td><td style="text-align:left;">JavaScript/TypeScript</td><td style="text-align:left;"><a href="https://github.com/tada5hi" target="_blank" rel="noreferrer">tada5hi</a></td></tr></tbody></table><h2 id="third-party-services" tabindex="-1">Third Party Services <a class="header-anchor" href="#third-party-services" aria-hidden="true">#</a></h2><p>The PHT relies heavily on other great open-source projects. Not only as libraries but also as standalone components of our architecture.</p><h3 id="central-1" tabindex="-1">Central <a class="header-anchor" href="#central-1" aria-hidden="true">#</a></h3><h4 id="harbor" tabindex="-1">Harbor <a class="header-anchor" href="#harbor" aria-hidden="true">#</a></h4><p>The container registry provided by the <a href="https://goharbor.io/" target="_blank" rel="noreferrer">Harbor project</a> is the central data/algorithm exchange platform of the PHT. Trains are defined as images which are distributed between the participants private harbor projects.</p><h4 id="vault" tabindex="-1">Vault <a class="header-anchor" href="#vault" aria-hidden="true">#</a></h4><p>For securely storing sensitive user or train data as key-value pairs we utilize <a href="https://www.vaultproject.io/" target="_blank" rel="noreferrer">Vault</a> by Hashicorp as secret storage for our central services.</p><h3 id="local-station-1" tabindex="-1">Local/Station <a class="header-anchor" href="#local-station-1" aria-hidden="true">#</a></h3><h4 id="apache-airflow" tabindex="-1">Apache Airflow <a class="header-anchor" href="#apache-airflow" aria-hidden="true">#</a></h4><p><a href="https://airflow.apache.org/" target="_blank" rel="noreferrer">Apache Airflow</a> is an open source, community developed platform to programmatically author, schedule and monitor workflows and the primary component of the station.</p><h4 id="fhir" tabindex="-1">FHIR <a class="header-anchor" href="#fhir" aria-hidden="true">#</a></h4><p>To overcome local setup differences between stations, the PHT provides controlled and reliable access to different FHIR Servers. We support the <a href="https://hub.docker.com/r/ibmcom/ibm-fhir-server" target="_blank" rel="noreferrer">IBM FHIR Server</a>, <a href="https://github.com/samply/blaze" target="_blank" rel="noreferrer">Blaze</a> and <a href="https://hapifhir.io" target="_blank" rel="noreferrer">HAPI</a> server. University hospital T\xFCbingen is using the IBM FHIR server.</p><h4 id="keycloak" tabindex="-1">Keycloak <a class="header-anchor" href="#keycloak" aria-hidden="true">#</a></h4><p>A user within the central user interface has always to be associated to a station. Each station can independently use different IAMs. We in T\xFCbingen use <a href="https://hub.docker.com/r/jboss/keycloak/" target="_blank" rel="noreferrer">Keycloak</a> for our user management.</p><h2 id="credits" tabindex="-1">Credits <a class="header-anchor" href="#credits" aria-hidden="true">#</a></h2><p>Icons used from <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer">flaticon</a> and <a href="https://www.freepik.com" target="_blank" rel="noreferrer">freepik</a></p>',28),l=[i];function o(s,h,c,d,p,g){return t(),a("div",null,l)}var u=e(n,[["render",o]]);export{b as __pageData,u as default};
