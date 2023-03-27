# Proposal
A Proposal is an organizational unit in the context of the PHT, which represents the collaboration between different participants in 
regard to a specific research or analysis project. It contains an initial risk assessment as well as a high level 
description of the requested data.

In the **Home** section press **Proposals** in the menu on the left-hand side.
At first, you will lead to the **outgoing**-proposals section, where you can see a list of all the proposals created by 
this realm. Via the searchbar you can filter after the name. You have the option to adjust the already existing 
proposals via the **List**-icon or to delete the proposal via the **bin**-icon. Furthermore, you can see, who exactly 
created that proposal.

Moreover, you have the option to switch to the **incoming** section or to create a new proposal on the left side between
the menu and the overview-list.

[![image](/images/ui_images/proposal.png)](/images/ui_images/proposal.png)

## Creation

After pressing the **Create**-button, it will take us to a new form. Here you can define principal aspects of the 
train. You can define ...

- ... a title of the proposal.
- ... the master image group where you can choose from cord, python, leuko-expert and R.
- ... the Image such as *base* (for cord | leuko-expert | python), *ml* (for python | r) and
*conda* , *pytorch* , *tensorflow* (for python).
- ... the risk level and specifies it by context in the risk comment: *Low* | *Mid* | *High*.
- ... to which of the known stations you want to send this proposal (You can choose multiple stations by clicking on the
green **+**-icon.).
- ... some Data/Parameters information, which will be necessary for the training algorithm in the **Data/Parameter**- 
text block.

After clicking on the Create-button the proposal will be sent to all the selected stations, so each side can either 
approve or reject the analysis. How the approval process works from the perspective of a realm admin, see the 
[admin guide](../admin/identity-providers.md).

[![Proposal create](/images/ui_images/proposal_create.png)](/images/ui_images/proposal_create.png)


A train is targeted at specific data from different stations. But data can be quite different depending on 
combinations of all data. Private medical data in general contains really sensitive information and needs to be handled
accordingly. For this, you give a risk estimation, so that each station has an idea about the level of data sensitivity 
accessed by the train. This estimation is categorized into three stages:

- Low risk (*green*): The train won't use any personal related data, such as calculation about all Loinc-Codes of 
Observation-Resources in a FHIR-Server.
- Mid risk (*yellow*): The train will use only one or hardly any personal information of a patient such as gender or 
age. One param will not be harmful at all, but should still be mentioned when used during the process.
- High (*red*): The train in general will perform some calculation/analysis on private data where it may be possible 
that private information will be figured out about a single person. This can occur when the calculations will be 
performed on a lot of personal information of only a few participants. Overall this should nevertheless not be an issue
when the FHIR-Servers provide enough privacy-preserving measurements such as pseudonymization or anonymization.

##  Approval 

Before an analysis can be performed based on your submitted proposal, it must be approved by the stations you selected. 
See the [Admin Guide](../admin/proposal-review.md) for details on how this process will be handled by the admin.
