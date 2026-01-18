/// <reference types ="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import datautils from "../../../support/dataUtils.cy";
import hideTemplateFromListActions from "../../../pageObjects/hideTemplateFromList/Actions.cy";
import hideTemplateFromListAssertions from "../../../pageObjects/hideTemplateFromList/Assertions.cy";
const dataUtil = new datautils();
const hideTemplateFromListAction = new hideTemplateFromListActions();
const hideTemplateFromListAssertion = new hideTemplateFromListAssertions();
const boardName = "cy-Board-test-hide-template"
const cardName = "cy-card-test-hide-template"
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
    hideTemplateFromListAction.openCard(cardUrl)
})
When("The user selects the option to hide the template",()=>{
    hideTemplateFromListAction.selectHideTemplateOption()
})

Then("The template should be hidden from the list successfully",()=>{
    hideTemplateFromListAssertion.checkTemplateisHiddenFromList()
})
after(()=>{
    dataUtil.deleteBoard(boardId)
})