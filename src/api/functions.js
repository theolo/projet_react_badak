import axios from 'axios'

const url = "http://localhost:8888/API_projet_badak"

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

function createProject(payload, callback) {
    axios.post(url + "/project/create_project.php", JSON.stringify(payload))
    .then(function(response) {
        callback(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}

function createPage(payload, callback) {
    axios.post(url + "/page/create_page.php", JSON.stringify(payload))
    .then(function(response) {
        callback(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}

function createModele(payload, callback) {
    axios.post(url + "/structure/create_modele.php", JSON.stringify(payload))
    .then(function(response) {
        callback(response.data)
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
    axios.get(url + "/page/page_list.php",  {
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

function getModeles(admin, callback) {
    axios.get(url + "/structure/modele_list.php",  {
        params: {
            admin: admin
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
    axios.get(url + "/page/page_blocs.php", {
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
    axios.get(url + "/page/bloc_fieldsgroups.php", {
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
    axios.get(url + "/page/group_fields.php", {
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
    axios.get(url + "/page/content.php", {
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
    axios.post(url + "/page/update_page_fields.php", JSON.stringify(payload))
    .then(function(response) {
        callback(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function updateTopPage(payload, callback) {
    axios.post(url + "/page/update_top_page.php", JSON.stringify(payload))
    .then(function(response) {
        callback(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export { getModeles, createProject, createPage, createModele, addUser, logIn, getUsers, getProjects, getPages, getPageBlocs, getBlocFieldsGroups, getGroupFields, getFieldContent, updatePageFields, updateTopPage }