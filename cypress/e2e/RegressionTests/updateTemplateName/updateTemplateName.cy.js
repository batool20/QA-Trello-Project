/// <reference types ="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import datautils from "../../../support/dataUtils.cy";
import updateTemplateNameActions from "../../../pageObjects/updateTemplateName/Actions.cy";
import updateTemplateNameAssertions from "../../../pageObjects/updateTemplateName/Assertions.cy";
const dataUtil = new datautils();
const updateTemplateNameAction = new updateTemplateNameActions();
const updateTemplateNameAssertion = new updateTemplateNameAssertions();
const boardName = "cy-Board-test-template"
const cardName = "cy-card-test-template"
const newTemplateName = "cy-updated-template-name"
let boardId , boardUrl , listId , cardId, cardUrl

before(()=>{
    dataUtil.createBoard(boardName).then((boardResponse)=>{
        boardId = boardResponse.body.id  
        boardUrl = boardResponse.body.url
        dataUtil.createBoradList(boardId,"To Do").then((listResponse)=>{
            listId = listResponse.body.id  

            dataUtil.createCard(listId,cardName).then((cardResponse)=>{
            cardId = cardResponse.body.id
            cardUrl = cardResponse.body.url
            dataUtil.convertCardToTemplate(cardId)
            }) 
        })
    })
    cy.loginToTrello()
})

Given("The user navigates to the existing card template",()=>{
    updateTemplateNameAction.openCard(cardUrl)
})

When("The user types a new template name in the card template name field",()=>{
    updateTemplateNameAction.typeNewTemplateName(newTemplateName)
})

Then("The template name should be updated successfully",()=>{
    updateTemplateNameAssertion.checkTemplateNameIsUpdated(newTemplateName)
})

after(()=>{
    dataUtil.deleteBoard(boardId)
})  