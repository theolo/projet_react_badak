import axios from 'axios'

const url = "http://localhost:8888/API_projet_badak"

function createProject(payload) {
    // axios.post(url + "", JSON.stringify(payload))
    // .then(function(response) {
    //     callback(response.data)
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
}


function addUser(payload, callback) {
    axios.post(url + "/user/create_user.php", JSON.stringify(payload))
    .then(function(response) {
        callback(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}

function logIn(payload, callback) {
    axios.post(url + "/login.php", JSON.stringify(payload))
    .then(function(response) {
        callback(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function getUsers(callback) {
    axios.get(url + '/user/user_list.php')
    .then(function(resp) {
        callback(resp.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function getProjects(id_user, callback) {
    axios.get(url + "/project/project_list.php",  {
        params: {
            id_user: id_user
        }
    })
    .then(function(response) {
        callback(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function getPages(id_projet, callback) {
    axios.get(url + "/project/page_list.php",  {
        params: {
            id_projet: id_projet
        }
    })
    .then(function(response) {
        callback(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function getPageBlocs(id_modele, callback) {
    axios.get(url + "/project/page_blocs.php", {
        params: {
            id_modele: id_modele
        }
    })
    .then(function(response) {
        callback(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
}

function getBlocFieldsGroups(id_bloc, callback) {
    axios.get(url + "/project/bloc_fieldsgroups.php", {
        params: {
            id_bloc: id_bloc,
        }
    })
    .then(function(response) {
        callback(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
}

function getGroupFields(id_group, callback) {
    axios.get(url + "/project/group_fields.php", {
        params: {
            id_group: id_group,
        }
    })
    .then(function(response) {
        callback(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
}

function getFieldContent(id_field, id_page, callback) {
    axios.get(url + "/project/content.php", {
        params: {
            id_field: id_field,
            id_page: id_page
        }
    })
    .then(function(response) {
        callback(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
}

function updatePageFields(payload, callback) {
    axios.post(url + "/project/update_page_fields.php", JSON.stringify(payload))
    .then(function(response) {
        callback(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function updateTopPage(payload, callback) {
    axios.post(url + "/project/update_top_page.php", JSON.stringify(payload))
    .then(function(response) {
        callback(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export { createProject, addUser, logIn, getUsers, getProjects, getPages, getPageBlocs, getBlocFieldsGroups, getGroupFields, getFieldContent, updatePageFields, updateTopPage }