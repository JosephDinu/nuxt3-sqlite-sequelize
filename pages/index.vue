<template>
    <v-app>
        <div class="test"> HOMEPAGE </div>
        <v-row>
            <v-col cols="6">
                <v-card v-for="(item, index) in users" :key="index" class="mb-2" variant="outlined">
                    <v-card-text>
                        <p>id: {{ item.id }}</p>
                        <p>firstName: {{ item.firstName }}</p>
                        <p>lastName: {{ item.lastName }}</p>
                        <p>email: {{ item.email }}</p>
                        <!-- <p>createdAt: {{ item.createdAt }}</p>
                        <p>updatedAt: {{  item.updatedAt }}</p> -->
                    </v-card-text>
                    
                    <v-card-actions >
                        <v-btn @click="deleteUser(item.id)" variant="elevated" color="warning">Delete</v-btn>
                        <v-btn @click="getUser(item)" variant="elevated" color="primary">Edit</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
    
            <v-col cols="6">
                <div>
                    <h2>CREATE NEW USER</h2>
                    <v-form>
                        <v-text-field
                            v-model="form.firstName"
                            label="First name"
                        ></v-text-field>
    
                        <v-text-field
                            v-model="form.lastName"
                            label="Last name"
                        ></v-text-field>
    
                        <v-text-field
                            v-model="form.email"
                            label="Email"
                        ></v-text-field>
    
                        <v-btn 
                            @click="createUser(form)"
                            block class="mt-2"
                            variant="elevated"
                            color="success"
                        >
                            Create User
                        </v-btn>
                    </v-form>
                </div>

                <div class="mt-5">
                    <h2>UPDATE USER</h2>
                    <v-form>
                        <v-text-field
                            disabled
                            v-model="updateUser.id"
                            label="ID"
                        ></v-text-field>

                        <v-text-field
                            v-model="updateUser.firstName"
                            label="First name"
                        ></v-text-field>
    
                        <v-text-field
                            v-model="updateUser.lastName"
                            label="Last name"
                        ></v-text-field>
    
                        <v-text-field
                            v-model="updateUser.email"
                            label="Email"
                        ></v-text-field>
    
                        <v-row>
                            <v-col cols="6">
                                <v-btn
                                    @click="saveUpdateUser(updateUser)"
                                    block 
                                    class="mt-2"
                                    variant="elevated"
                                    color="warning"
                                >
                                    Update User
                                </v-btn>
                            </v-col>
                            <v-col cols="6">
                                <v-btn
                                    @click="clear()"
                                    block
                                    class="mt-2"
                                    variant="elevated"
                                    color="grey100"
                                >
                                    Clear
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </div>
            </v-col>
        </v-row>
    </v-app>
</template>

<script setup>
    const { data: users } = await useFetch('http://localhost:3000/api/users').then(res => res)

    const form = ref({
        firstName: "",
        lastName: "",
        email: ""
    })
    const editForm = reactive({
        id: '',
        firstName: '',
        lastName: '',
        email: ''
    })

    const updateUser = computed(() => {
        return editForm
    })

    const createUser = async (form) => {
        await useFetch('http://localhost:3000/api/users/create', {
            method: "POST",
            body: {
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email
            }
        })

        window.location.reload()
    }
    const deleteUser = async (id) => {
        await useFetch('http://localhost:3000/api/users/delete', {
            method: "POST",
            body: {
                id: id,
            }
        })

        window.location.reload()
    }

    const getUser = async (user) => {
        editForm.id = user.id
        editForm.firstName = user.firstName
        editForm.lastName = user.lastName
        editForm.email = user.email
    }

    const clear = () => {
        editForm.id = ""
        editForm.firstName = ""
        editForm.lastName = ""
        editForm.email = ""
    }

    const saveUpdateUser = async (user) => {
        await useFetch('http://localhost:3000/api/users/edit', {
            method: "POST",
            body: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        })

        window.location.reload()
    }

</script>
